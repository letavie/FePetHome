import { useContext } from "react";
import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";
import { CartContext } from "context/CartContext";
import { Delete } from "@mui/icons-material";

const CartItem = (props) => {
  const { id, name, price, image } = props.data;
  const { cartItem, addToCart, removeFromCart, deleteFromCart, updateCartItemQuantity } = useContext(CartContext);
  const cartItemInfo = cartItem.find((item) => item.id == id); // Tìm thông tin sản phẩm trong giỏ hàng
  const totalPriceProduct = () => {
    const itemInCart = cartItem.find((item) => item.id === id);

    if (itemInCart) {
      const productQuantity = itemInCart.value; // Số lượng của sản phẩm trong giỏ hàng
      const total = productQuantity * price; // Tổng tiền cho sản phẩm hiện tại
      return total;
    }

    return 0; // Trả về 0 nếu sản phẩm không tồn tại trong giỏ hàng
  };
  const totalForThisProduct = totalPriceProduct();

  return (
    <div className={styles["cartItem"]}>
      <div className={styles["cart-info"]}>
        <span className={styles["Image"]}>
          <Link to={`/product/${id}`}>
            <img src={image} alt="" />
          </Link>
        </span>
        <span className={styles["Name"]}>
          <Link to={`/product/${id}`} className={styles["name"]}>
            <div>{name}</div>
          </Link>
          <div className={styles["Delete"]}>
            <Delete onClick={() => deleteFromCart(id)} className={styles["trash"]} />
          </div>
        </span>
        <span className={styles["Price"]}>{price.toLocaleString()}đ</span>
        <span className={styles["Quantity"]}>
          <div className={styles["box-quantity"]}>
            <button onClick={() => removeFromCart(id)}>-</button>
            <input
              value={cartItemInfo ? cartItemInfo.value : 0}
              onChange={(event) => updateCartItemQuantity(Number(event.target.value), id)}
            />
            <button onClick={() => addToCart(id)}>+</button>
          </div>
        </span>
        <span className={styles["Total"]}>{totalForThisProduct.toLocaleString()}đ</span>
      </div>
    </div>
  );
};
export default CartItem;
