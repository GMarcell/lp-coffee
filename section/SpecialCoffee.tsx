"use client";

import { useState } from "react";
import MenuCard from "../components/MenuCard";
import { beverages, desserts } from "../constant";

export default function SpecialCoffee() {
  const [beveragesMenus, setBeveragesMenus] = useState([...beverages]);
  const [dessertsMenus, setDessertsMenus] = useState([...desserts])

  const onChangeIsLikedBeverage = (selectedTitle: string) => {
    setBeveragesMenus(beveragesMenus.map((item) => {
      if(item.title === selectedTitle){
        return {
          ...item,
          isLoved: !item.isLoved
        }
      } else {
        return {
          ...item
        }
      }
    }))
  }

  const onChangeIsLikedDessert = (selectedTitle: string) => {
    setDessertsMenus(dessertsMenus.map((item) => {
      if(item.title === selectedTitle){
        return {
          ...item,
          isLoved: !item.isLoved
        }
      } else {
        return {
          ...item
        }
      }
    }))
  }

  return (
    <div className="bg-primary py-5 px-3.5 text-center flex flex-col gap-5 md:px-16">
      <div className="uppercase font-bold text-xl">Our Special Coffee</div>
      <div className="flex overflow-scroll gap-3 mt-3">
        {beveragesMenus.map((beverage, index) => (
          <MenuCard
            key={index}
            imgUrl={beverage.imgUrl}
            title={beverage.title}
            description={beverage.description}
            price={beverage.price}
            isLoved={beverage.isLoved}
            onChangeIsLoved={onChangeIsLikedBeverage}
          />
        ))}
      </div>
      <div className="uppercase font-bold text-xl">Our Special Desserts</div>
      <div className="flex overflow-scroll gap-3 mt-3">
        {dessertsMenus.map((dessert, index) => (
          <MenuCard
            key={index}
            imgUrl={dessert.imgUrl}
            title={dessert.title}
            description={dessert.description}
            price={dessert.price}
            isLoved={dessert.isLoved}
            onChangeIsLoved={onChangeIsLikedDessert}
          />
        ))}
      </div>
    </div>
  );
}
