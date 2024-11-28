import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDichVuOpen, setIsDichVuOpen] = useState(false);
  const [isCuaHangOpen, setIsCuaHangOpen] = useState(false);
  const [isSpaOpen, setIsSpaOpen] = useState(false);
  // const [isDichVuTaiNhaOpen, setIsDichVuTaiNhaOpen] = useState(false);
  const [isDanhChoChoOpen, setIsDanhChoChoOpen] = useState(false);
  const [isDanhChoMeoOpen, setIsDanhChoMeoOpen] = useState(false);

  return (
    <div className="navbar-header">
      <Link to="/">
        <img
          className="logo"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a99a9f8361ca8fbc284488c05211431929308018cbb774be9071d5f7e678c8f?apiKey=b18136557b87444da5ca24a814c472b7&"
        />
      </Link>

      <ul>
        <li>
          <Link to="/">Trang Chủ</Link>
        </li>
        <li>
          {" "}
          <Link to="/introduction"> Giới Thiệu </Link>{" "}
        </li>
        <li
          onMouseEnter={() => setIsDichVuOpen(true)}
          onMouseLeave={() => setIsDichVuOpen(false)}
        >
          <div className="dropdown-icon">
            <Link to={"/services"}>
              Dịch Vụ <ArrowDropDownIcon />
            </Link>
          </div>

          {isDichVuOpen && (
            <ul className="dropdown">
              <li
                onMouseEnter={() => setIsSpaOpen(true)}
                onMouseLeave={() => setIsSpaOpen(false)}
              >
                <div className="dropdown-icon">
                  {" "}
                  Spa Thú Cưng <ArrowDropDownIcon />
                </div>
                {isSpaOpen && (
                  <ul className="dropdown">
                    <li>Tắm, gội, vệ sinh</li>
                    <li>Cắt, tỉa</li>
                    <li>Tắm, vệ sinh, cạo</li>
                  </ul>
                )}
              </li>
              {/* <li
                onMouseEnter={() => setIsDichVuTaiNhaOpen(true)}
                onMouseLeave={() => setIsDichVuTaiNhaOpen(false)}
              >
                <div className="dropdown-icon">
                  Dịch Vụ Tại Nhà <ArrowDropDownIcon />
                </div>

                {isDichVuTaiNhaOpen && (
                  <ul className="dropdown">
                    <li>Tắm tại nhà</li>
                    <li>Cắt, tỉa tại nhà</li>
                  </ul>
                )}
              </li> */}
              <li>Khách sạn thú cưng</li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => setIsCuaHangOpen(true)}
          onMouseLeave={() => setIsCuaHangOpen(false)}
        >
          <div className="dropdown-icon">
            <Link to="/general-product">Cửa Hàng</Link> <ArrowDropDownIcon />
          </div>

          {isCuaHangOpen && (
            <ul className="dropdown">
              <li
                onMouseEnter={() => setIsDanhChoChoOpen(true)}
                onMouseLeave={() => setIsDanhChoChoOpen(false)}
              >
                <div className="dropdown-icon">
                  <Link to="/dog-product-general">
                    {" "}
                    Dành cho chó <ArrowDropDownIcon />
                  </Link>
                </div>

                {isDanhChoChoOpen && (
                  <ul className="dropdown">
                    <li>
                      <Link to="/dog-food">Thức ăn cho chó</Link>
                    </li>
                    <li>
                      <Link to="/dog-product">Phụ kiện cho chó</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={() => setIsDanhChoMeoOpen(true)}
                onMouseLeave={() => setIsDanhChoMeoOpen(false)}
              >
                <div className="dropdown-icon">
                  {" "}
                  <Link to="/cat-product-general">
                    Dành cho mèo <ArrowDropDownIcon />
                  </Link>
                </div>

                {isDanhChoMeoOpen && (
                  <ul className="dropdown">
                    <li>
                      <Link to="/cat-food">Thức ăn cho mèo</Link>
                    </li>
                    <li>
                      <Link to="/cat-product">Phụ kiện cho mèo</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li>
          {" "}
          <Link to="/contact">Liên Hệ</Link>
        </li>
      </ul>
      <div className="navbar-booking">
        <p>ĐẶT PHÒNG TRỰC TUYẾN</p>
        <SendIcon />
      </div>
    </div>
  );
}

export default Navbar;
