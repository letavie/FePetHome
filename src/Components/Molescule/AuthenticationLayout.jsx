import React from "react";
import Background from "assets/images/PetDog.png";
export default function AuthenticationLayout({ children }) {
  return (
    <div className="font-geist w-screen h-screen flex">
      <div className="flex-1 hidden md:block">
        <img
          src={Background}
          alt="auth-background"
          className="w-full h-full  "
        />
      </div>
      <div className="flex-1 flex items-center justify-center  ">
        {children}
      </div>
    </div>
  );
}
