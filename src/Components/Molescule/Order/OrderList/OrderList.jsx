import { useContext, useState, useEffect } from "react";
import MyAxios from "setup/configAxios";
import styles from "./OrderList.module.scss";
const OrderList = ({ onTotalAmountChange }) => {
  const [orderItems, setOrderItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsReady, setProductsReady] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrices, setTotalPrice] = useState(0);

  useEffect(() => {
    // Gọi API để lấy danh sách sản phẩm
    MyAxios.get("http://localhost:5000/api/v1/products?type=product").then((response) => {
      setProducts(response.data);
      setProductsReady(true); // Đánh dấu rằng dữ liệu sản phẩm đã sẵn sàng
    });

    // Lấy dữ liệu từ Local Storage
    const cartData = JSON.parse(localStorage.getItem("shopCart"));

    const updatedCartItems = [];
    let totalQuantity = 0;
    let totalPrice = 0;
    //  truy xuất thông tin nếu dữ liệu  true
    if (productsReady) {
      for (const item of cartData) {
        const productId = item.id;
        const quantity = item.value;
        const product = products.find((p) => p._id === productId);
        if (product) {
          const totalproductPrice = product.price * quantity;

          setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity);
          setTotalPrice((prevTotalPrice) => prevTotalPrice + totalproductPrice);

          updatedCartItems.push({
            id: productId,
            name: product.name,
            price: product.price,
            quantity,
            totalproductPrice,
            image: product.image,
          });
        }
      }
    }
    setOrderItems(updatedCartItems);
  }, [productsReady]);
  let ship = 12000;
  let total = totalPrices + ship;
  onTotalAmountChange(total);
  return (
    <div className={styles["order-in4"]}>
      <div className={styles["order"]}>
        <h2 className={styles["title"]}> Đơn hàng của bạn ({totalQuantity} sản phẩm)</h2>
        <div className={styles["order-content"]}>
          <div className={styles["san-pham"]}>Sản phẩm</div>
          <div className={styles["tam-tinh"]}>Tạm tính</div>
        </div>
        <div className={styles["order-item"]}>
          {orderItems.map((item) => (
            <div className={styles["content"]}>
              <div className={styles["left-content"]}>
                <div className={styles["quantity"]}>
                  <div className={styles["quantity-number"]}>{item.quantity}</div>
                </div>
                <div className={styles["description"]}>
                  <div className={styles["image"]}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className={styles["name"]}>{item.name}</div>
                </div>
              </div>
              <div className={styles["right-content"]}>
                <div className={styles["description"]}>{(item.price * item.quantity).toLocaleString()}đ</div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles["divider"]}></div>
        <div className={styles["content-footer"]}>
          <div className={styles["content-footer-estimated"]}>
            <span className={styles["content-footer-estimated-title"]}>Tạm tính</span>
            <span className={styles["content-footer-estimated-price"]}>{totalPrices.toLocaleString()}đ</span>
          </div>
          <div className={styles["content-footer-estimated"]}>
            <span className={styles["content-footer-estimated-title"]}>Giao hàng</span>
            <span className={styles["content-footer-estimated-price"]}>{ship.toLocaleString()}đ</span>
          </div>
          <div className={styles["divider"]}></div>
          <div className={styles["content-footer-total"]}>
            <span className={styles["content-footer-total-title"]}>Tổng tiền</span>
            <span className={styles["content-footer-total-price"]}>{total.toLocaleString()}đ</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderList;
