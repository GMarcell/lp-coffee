"use client";

import { useState } from "react";
import MenuCard from "../components/MenuCard";
import { beverages } from "../constant";

export default function SpecialCoffee() {
  const [beveragesMenus, setBeveragesMenus] = useState([...beverages]);

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

  return (
    <div className="bg-primary py-5 px-2 text-center">
      <div className="uppercase font-bold text-xl">Our Special Coffee</div>
      <div className="flex overflow-scroll gap-3">
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
    </div>
  );
}
