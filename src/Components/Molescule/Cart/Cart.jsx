import { useContext } from "react";
import styles from "./Cart.module.scss";
import { ListProdcuts } from "./ListProduct";
import { CartContext } from "context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
const Cart = () => {
  const productArray = ListProdcuts();
  const { cartItem, calculateTotalPrice, calculateTotalQuantity } =
    useContext(CartContext);
  const total = calculateTotalPrice(cartItem, ListProdcuts());
  const totalQuantityInCart = calculateTotalQuantity(cartItem, productArray);
  const hasItemsInCart = Object.keys(cartItem).length > 0;
  console.log("li", productArray);
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>Giỏ hàng</div>
      <div className={styles["cart"]}>
        {hasItemsInCart && (
          <div className={styles["cart-header"]}>
            <div className={styles["info"]}>Sản phẩm </div>
            <div className={styles["price"]}>Giá</div>
            <div className={styles["quantity"]}>Số lượng</div>
            <div className={styles["total"]}>Tạm tính</div>
          </div>
        )}
      </div>
      <div className={styles["cart-item"]}>
        {hasItemsInCart ? (
          // Hiển thị danh sách sản phẩm nếu có sản phẩm trong giỏ hàng
          productArray.map((product) => {
            if (cartItem.some((item) => item.id === product.id)) {
              return <CartItem data={product} />;
            }
          })
        ) : (
          // Hiển thị "Giỏ hàng rỗng" nếu không có sản phẩm trong giỏ hàng
          <div className={styles["empty-cart"]}>
            <img
              src="https://theme.hstatic.net/200000551679/1001042568/14/cart_empty_background.png?v=874"
              alt="empty cart"
            />
            <h1>Giỏ hàng này trống</h1>
            <h2>Vào trang cửa hàng để chọn mua sản phẩm nhé!!</h2>
            <Link to={"/general-product"}>
              <button className={styles["btn-shop"]}>
                {" "}
                Mua sắm ngay bây giờ
              </button>
            </Link>
          </div>
        )}
      </div>
      {hasItemsInCart && (
        <div className={styles["footer"]}>
          <div className={styles["discount"]}>
            <input
              type="text"
              name="code"
              value={""}
              placeholder="Mã ưu đãi"
              className={styles["input-code"]}
            />
            <button type="submit" className={styles["ap-dung"]}>
              Áp dụng
            </button>
          </div>
          <div className={styles["total"]}>
            <span className={styles["text"]}>Tổng cộng:</span>
            <span className={styles["value"]}>{total.toLocaleString()}đ</span>
          </div>
        </div>
      )}

      {hasItemsInCart && (
        <button
          className={styles["btn-checkout"]}
          onClick={() => {
            if (localStorage.getItem("access_token") == null) {
              window.location.href = "/login";
            } else {
              window.location.href = "/order";
            }
          }}
        >
          Tiến hành thanh toán{" "}
        </button>
      )}
    </div>
  );
};
export default Cart;
