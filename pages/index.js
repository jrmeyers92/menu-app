import { use, useState } from "react";
import { categories } from "../menuData";
import { menuItems } from "../menuData";

export default function Home() {
  const getCategories = () => {
    let allCategories = [];
    menuItems.forEach((item) => {
      item.categories.forEach((catagory) => {
        allCategories.push(catagory);
      });
    });

    let categories = new Set(allCategories);
    console.log(categories);
  };

  getCategories();

  return (
    <>
      <h1 className="text-center text-4xl my-8">Red Robin</h1>
      {categories.map((catagory) => (
        <h2>{catagory}</h2>
      ))}

      <br />
      <br />
      <br />

      {menuItems.map((item) => (
        <h3>{item.categories}</h3>
      ))}
    </>
  );
}
