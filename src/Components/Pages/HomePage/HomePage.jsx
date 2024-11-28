import styles from "./HomePage.module.scss";
import petDog from "../../../assets/images/petDog.webp";
import chomeo from "../../../assets/images/chomeo.jpg";
import chamsoc from "../../../assets/images/dich-vu-cham-soc-thu-cung-tai-nha.jpg.webp";
import cattia from "../../../assets/images/cattia.jpg";
import p1 from "../../../assets/images/products1.webp";
import p2 from "../../../assets/images/products2.webp";
import p3 from "../../../assets/images/products3.png";
import ServiceCard from "Components/Molescule/ServiceCards/ServiceCards";
import ProductCard from "Components/Molescule/ProductCards/ProductCard";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CheckIcon from "@mui/icons-material/Check";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["first"]}>
        <div className={styles["interview"]}>
          <div className={styles["introduct"]}>
            <div className={styles["introduct-text"]}>
              <div className={styles["introduct-header"]}>PET HOME</div>
              <div className={styles["introduct-body"]}>DỊCH VỤ THÚ CƯNG </div>
              <div className={styles["introduct-footer"]}>UY TÍN HÀNG ĐẦU</div>
            </div>
            <div className={styles["introduct-btn"]}>
              <div className={styles["introduct-btn-1"]}>
                <Link to="/services">
                  <button className={styles["introduct-btn-more"]}>
                    Xem thêm
                  </button>
                </Link>
              </div>
              <div className={styles["introduct-btn-2"]}>
                <button className={styles["introduct-btn-booking"]}>
                  ĐẶT PHÒNG TRỰC TRUYẾN
                </button>
              </div>
            </div>
          </div>
          <div className={styles["image"]}>
            <img src={petDog} alt="anh cho" />
          </div>
        </div>
        <div className={styles["services"]}>
          <div className={styles["introduct"]}>
            <div className={styles["introduct-text"]}>
              <div className={styles["introduct-header"]}>DỊCH VỤ THÚ CƯNG</div>
              <div className={styles["introduct-body"]}>DỊCH VỤ</div>
              <div className={styles["introduct-footer"]}>HÀNG ĐẦU</div>
            </div>
          </div>
          <div className={styles["card"]}>
            <Link to="/services">
              <ServiceCard
                title="CHĂM SÓC"
                detail={
                  "Chúng tối biết cách làm thế nào để thú cưng của bạn trở nên đẳng cấp và cá tính hơn. Với dịch vụ cắt tỉa lông thú cưng chúng tôi sẽ giúp các bé trở thành phiên bản hoàn hảo nhất..."
                }
                className={styles["services-care"]}
              />
            </Link>

            <Link to="/general-product">
              <ServiceCard
                title="CỬA HÀNG"
                detail={
                  "Cùng với hơn 3.000 khách hàng đã luôn tin tưởng, đồng hành, chúng tôi luôn đặt ra những mục tiêu và thử thách mới. PET SERVICE cung cấp các sản phẩm, phụ kiện rất đa dạng..."
                }
                className={styles["services-shop"]}
              />
            </Link>

            <ServiceCard
              title="KHÁCH SẠN"
              detail={
                "Mọi hành động ở PET SERVICE đều bắt đầu từ sứ mệnh Trao Gửi Yêu Thương. Mọi thú cưng mới khi đến với chúng tôi đều được quan tâm đặc biệt bởi đội ngũ Nhân viên nhiều kinh nghiệm..."
              }
              className={styles["services-hotel"]}
            />
          </div>
        </div>
        <div className={styles["products"]}>
          <div className={styles["introduct"]}>
            <div className={styles["introduct-text"]}>
              <div className={styles["introduct-header"]}>HÀNG NÓNG</div>
              <div className={styles["introduct-body"]}>SẢN PHẨM</div>
              <div className={styles["introduct-footer"]}>NỔI BẬT</div>
              <div className={styles["introduct-btn"]}>
                <Link to="/general-product">
                  <button className={styles["introduct-btn-view"]}>
                    Xem cửa hàng
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles["products-card"]}>
            <ProductCard
              img={p1}
              forType={"Cho Mèo"}
              content={"Bánh quy thưởng Funny U cho chó mèo gói 100g"}
              price={"50.000 ₫"}
            />
            <ProductCard
              img={p2}
              forType={"Cho Chó & Mèo"}
              content={"Balo trong ngang"}
              price={"390.000 ₫"}
            />
            <ProductCard
              img={p3}
              forType={"Cho Chó "}
              content={"Chai Xịt Vệ Sinh"}
              price={"390.000 ₫"}
            />
          </div>
        </div>
      </div>
      <div className={styles["second"]}>
        <div className={styles["service-spa"]}>
          <div className={styles["service-spa-interview"]}>
            <div className={styles["service-spa-text"]}>
              <h1 className={styles["service-spa-title"]}>
                DỊCH VỤ TẬN TÌNH - AN TÂM CHẤT LƯỢNG
              </h1>
              <h3 className={styles["service-spa-body"]}>
                Liên hệ ngay để được tư vấn và báo giá các dịch vụ phù hợp cho
                bé yêu của bạn!
              </h3>
            </div>
            <div className={styles["introduct-btn"]}>
              <Link to="/contact">
                <button className={styles["introduct-btn-advise"]}>
                  TƯ VẤN MIỄN PHÍ
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles["service-spa-in4"]}>
          <div className={styles["service-spa-img"]}>
            <div className={styles["service-spa-text"]}>
              <div className={styles["text-header"]}>THÔNG TIN</div>
              <div className={styles["text-body"]}>SPA CHO THÚ CƯNG</div>
              <div className={styles["text-footer"]}>CHUẨN 5 SAO</div>
              <div className={styles["service-spa-btn"]}>
                <Link to="/services">
                  <button className={styles["spa-btn-more"]}>Xem thêm</button>
                </Link>
              </div>
            </div>
            <img className={styles["spa-img"]} src={chomeo} alt="anh cho meo" />
            <div className={styles["service-spa-title"]}>
              <div className={styles["service-spa-title-header"]}>
                <div className={styles["service"]}>Dịch vụ chuyên nghiệp</div>
                <div className={styles["fast"]}>Nhanh chóng </div>
              </div>
              <div className={styles["service-spa-title-body"]}>
                <div className={styles["header"]}>KHÁM SỨC KHỎE MIỄN PHÍ</div>
                <div className={styles["body"]}>
                  Mọi hành động ở PET HOME đều bắt đầu từ sứ mệnh Trao gửi yêu
                  thương. Do vậy, Spa đạt chuẩn với quy trình khắt khe sẽ mang
                  lại sự thom tho và sạch sẽ cho thú cưng của bạn.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["service-care"]}>
          <div className={styles["introduct"]}>
            <div className={styles["introduct-text"]}>
              <div className={styles["introduct-header"]}>
                Thông Tin & Bảng Giá
              </div>
              <div className={styles["introduct-body"]}>
                Dịch vụ tắm vệ sinh
              </div>
            </div>
            <div className={styles["service-cut-in4"]}>
              <div className={styles["service-cut-list"]}>
                <div className={styles["list"]}>
                  <span className={styles["check-icon"]}>
                    <CheckIcon />
                  </span>
                  CẠO BÀN CHÂN / BỤNG / HẬU MÔN
                </div>
                <div className={styles["list"]}>
                  <span className={styles["check-icon"]}>
                    <CheckIcon />
                  </span>
                  CẮT & MÀI NHẴN MÓNG CHÂN
                </div>
                <div className={styles["list"]}>
                  <span className={styles["check-icon"]}>
                    <CheckIcon />
                  </span>
                  VỆ SINH TAI & KHỬ MÙI TUYẾN HÔI
                </div>
                <div className={styles["list"]}>
                  <span className={styles["check-icon"]}>
                    <CheckIcon />
                  </span>
                  TẮM SẠCH BẰNG 2 LOẠI SỮA TẮM
                </div>
                <div className={styles["list"]}>
                  <span className={styles["check-icon"]}>
                    <CheckIcon />
                  </span>
                  SẤY & CHẢI BUNG XÙ LÔNG
                </div>
              </div>
              <div className={styles["service-cut-price"]}>
                <div className={styles["title"]}>Chỉ từ</div>
                <div className={styles["service-combo"]}>300.000đ</div>
              </div>
            </div>
            <div className={styles["introduct-btn"]}>
              <div className={styles["introduct-btn-1"]}>
                <Link to="services">
                  <button className={styles["introduct-btn-more"]}>
                    Xem thêm
                  </button>
                </Link>
              </div>
              <div className={styles["introduct-btn-2"]}>
                <Link to="services">
                  <button className={styles["introduct-btn-booking"]}>
                    Đặt lịch ngay
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles["image-care"]}>
            <img src={chamsoc} alt="cham soc" />
          </div>
        </div>
        <div className={styles["service-hotline"]}>
          <h3 className={styles["service-link"]}>PETHOME.COM</h3>
          <h1 className={styles["service-hotline-title"]}>
            Chúng tôi luôn <span>sẵn sàng </span> phục vụ bạn
          </h1>
          <button className={styles["service-hotline-btn"]}>
            <LocalPhoneIcon />
            <Link to="/contact">
              <span className={styles["hotline-text"]}>
                {" "}
                DỊCH VỤ THÚ CƯNG TẠI NHÀ - 24/7{" "}
              </span>
            </Link>
          </button>
        </div>
        <div className={styles["service-cut"]}>
          <div className={styles["image-care"]}>
            <img src={cattia} alt="cat" />
          </div>
          <div className={styles["introduct"]}>
            <div className={styles["introduct-text"]}>
              <div className={styles["introduct-header"]}>
                Thông Tin & Bảng Giá
              </div>
              <div className={styles["introduct-body"]}>
                Dịch vụ tắt tỉa lông
              </div>
            </div>
            <div className={styles["service-cut-in4"]}>
              <div className={styles["service-cut-list"]}>
                <div className={styles["list"]}>
                  <span className={styles["check-icon"]}>
                    <CheckIcon />
                  </span>
                  Cắt Gọn Lông
                </div>
                <div className={styles["list"]}>
                  <span className={styles["check-icon"]}>
                    <CheckIcon />
                  </span>
                  Tỉa Lông Tạo Kiểu
                </div>
                <div className={styles["list"]}>
                  <span className={styles["check-icon"]}>
                    <CheckIcon />
                  </span>
                  Cạo Lông
                </div>
              </div>
              <div className={styles["service-cut-price"]}>
                <div className={styles["title"]}>Chỉ từ</div>
                <div className={styles["service-combo"]}>400.000đ</div>
              </div>
            </div>
            <div className={styles["introduct-btn"]}>
              <div className={styles["introduct-btn-1"]}>
                <Link to="/services">
                  <button className={styles["introduct-btn-more"]}>
                    Xem thêm
                  </button>
                </Link>
              </div>
              <div className={styles["introduct-btn-2"]}>
                <Link to="/services">
                  <button className={styles["introduct-btn-booking"]}>
                    Đặt lịch ngay
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["service-combo"]}></div>
      </div>
    </div>
  );
};
export default HomePage;
