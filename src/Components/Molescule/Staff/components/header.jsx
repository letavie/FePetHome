import React from "react";
import logo from "assets/images/logoPetHome.png";
export default function Header() {
  return (
    <div className="h-[7vh]  bg-mainColer flex justify-between">
      <div className="p-4 text-textColer font-mainText font-bold text-xl">
        STAFF
      </div>
      <div className="p-4 text-textColer font-mainText  font-bold text-2xl">
        PET HOME
      </div>
      <div></div>
    </div>
  );
}
