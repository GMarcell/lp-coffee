import React from "react";
import { BiCoffeeTogo } from "react-icons/bi";
import { GiBoba, GiCakeSlice } from "react-icons/gi";
import { SiCoffeescript } from "react-icons/si";

function Type() {
  return (
    <div className="flex flex-row gap-1 py-5 items-center justify-center md:gap-5">
      <div className="flex flex-col justify-center items-center p-3 gap-1.5">
        <SiCoffeescript size={56} />
        <div className="text-md text-center">Hot Coffee</div>
      </div>
      <div className="flex flex-col justify-center items-center p-3 gap-1.5">
        <GiBoba size={56}/>
        <div className="text-md text-center">Cold Coffee</div>
      </div>
      <div className="flex flex-col justify-center items-center p-3 gap-1.5">
        <BiCoffeeTogo size={56}/>
        <div className="text-md text-center">Cup Coffee</div>
      </div>
      <div className="flex flex-col justify-center items-center p-3 gap-1.5">
        <GiCakeSlice size={56}/>
        <div className="text-md text-center">Dessert</div>
      </div>
    </div>
  );
}

export default Type;
