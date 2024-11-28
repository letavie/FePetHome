import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "assets/icons/nav-menu-icons/HomeIcon";
import CalendarTodayIcon from "assets/icons/nav-menu-icons/CalendarTodayIcon";
import PawIcon from "assets/icons/nav-menu-icons/paw";
import CartIcon from "assets/icons/nav-menu-icons/CartIcon";
import LeftAngle from "assets/icons/nav-menu-icons/leftAngle";

const Sidebar = () => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState(1);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div className="h-screen w-64 text-black font-mainText3">
      <nav className="mt-1 p-3 flex justify-evenly flex-col">
        <div>
          <Link to="/staff/list-booking">
            <div
              className={`p-2 my-2 flex items-center rounded-l-full  transition duration-200 ${
                selectedButton === 1
                  ? "bg-bgColer text-textColer font-semibold"
                  : "hover:font-semibold hover:bg-bgColer hover:text-textColer "
              }`}
              onClick={() => handleButtonClick(1)}
            >
              <CalendarTodayIcon />
              <a className="py-2.5 px-4 w-full">Danh sách đặt chổ</a>
            </div>
          </Link>
          <Link to="/staff/list-service">
            <div
              className={`p-2 my-2  flex items-center rounded-l-full transition duration-200 ${
                selectedButton === 2
                  ? "bg-bgColer text-textColer font-semibold"
                  : "hover:font-semibold hover:bg-bgColer hover:text-textColer"
              }`}
              onClick={() => handleButtonClick(2)}
            >
              <HomeIcon />
              <a className="py-2.5 px-4 w-full">Danh sách dịch vụ</a>
            </div>
          </Link>
          <Link to="/staff/list-product">
            <div
              className={`p-2 my-2  flex items-center rounded-l-full transition duration-200 ${
                selectedButton === 3
                  ? "bg-bgColer text-textColer font-semibold"
                  : "hover:font-semibold hover:bg-bgColer hover:text-textColer"
              }`}
              onClick={() => handleButtonClick(3)}
            >
              <PawIcon />
              <a className="py-2.5 px-4 w-full">Danh sách sản phẩm</a>
            </div>
          </Link>
          <Link to="/staff/list-order">
            <div
              className={`p-2 my-2 flex items-center rounded-l-full transition duration-200 ${
                selectedButton === 4
                  ? "bg-bgColer text-textColer font-semibold"
                  : "hover:font-semibold hover:bg-bgColer hover:text-textColer"
              }`}
              onClick={() => handleButtonClick(4)}
            >
              <CartIcon />
              <a className="py-2.5 px-4 w-full">Danh sách đơn hàng</a>
            </div>
          </Link>
        </div>
        {/* Logout button */}
        <div
          className="p-2 m-2 flex items-center rounded-l-full transition duration-200 hover:bg-bgColer hover:text-textColer cursor-pointer"
          onClick={handleLogout}
        >
          <LeftAngle />
          <span className="py-2.5 px-4 w-full">Logout</span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
