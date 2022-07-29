import React, { useState } from "react";
import "./style.css";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import NavBar from "./Navbar";

//  used to traverse and display a list of similar objects of a component.
const uniqueList = [
  ...new Set(
    Menu.map((currElem) => {
      return currElem.category;
    })
  ),"All",
];
console.log(uniqueList)

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
const [ menuList , setMenuList] = useState(uniqueList);
  
  const filterItem = (category) => {
    if(category === "All")
    {
      setMenuData(Menu);
      return;
    }
    const updateList = Menu.filter((currElem) => {
      return currElem.category === category;
    });

    setMenuData(updateList);
  };
  return (
    <>
      <NavBar filterItem={filterItem} menuList = {menuList}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
