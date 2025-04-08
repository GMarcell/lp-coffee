import React from "react";
import { GiBoba, GiCakeSlice } from "react-icons/gi";
import { RiDrinksFill } from "react-icons/ri";
import { SiCoffeescript } from "react-icons/si";

function Type() {
  return (
    <div className="flex flex-row gap-1 py-5">
      <div className="flex flex-col justify-center items-center p-3 gap-1.5">
        <SiCoffeescript size={56}/>
        <div className="text-md text-center">Hot Coffee</div>
      </div>
      <div className="flex flex-col justify-center items-center p-3 gap-1.5">
        <GiBoba size={56}/>
        <div className="text-md text-center">Cold Coffee</div>
      </div>
      <div className="flex flex-col justify-center items-center p-3 gap-1.5">
        <RiDrinksFill size={56}/>
        <div className="text-md text-center">Hot Coffee</div>
      </div>
      <div className="flex flex-col justify-center items-center p-3 gap-1.5">
        <GiCakeSlice size={56}/>
        <div className="text-md text-center">Hot Coffee</div>
      </div>
    </div>
  );
}

export default Type;
