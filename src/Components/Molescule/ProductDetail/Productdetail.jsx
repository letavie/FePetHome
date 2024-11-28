import React, { useContext, useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import MyAxios from "../../../setup/configAxios";
import "./Productdetail.scss";
import { CartContext } from "context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useContext(CartContext);

  const handleQuantityChange = (event) => {
    const value = Number(event.target.value);
    if (value <= product.quantity && value >= 1) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(id);
    }
    toast.success(`${product.name} đã thêm vào giỏ hàng`, {
      autoClose: 100,
    });
  };

  useEffect(() => {
    MyAxios.get(`http://localhost:5000/api/v1/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return product ? (
    <div className="bg-[#f9f6f6]">
      <ToastContainer />
      <div className="product-detail-container">
        <div className="product-information">
          <h1 className="info-name mb-7">{product.name}</h1>
          <p className="info-price">{product.price} đ</p>
          <p className="info-availability">
            <span className="font-bold text-black">khả dụng:</span>{" "}
            <span className="text-[#77a464]">
              còn {product.quantity} sản phẩm
            </span>{" "}
          </p>

          <div className="flex gap-10">
            <div>
              <TextField
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="quantity-section"
              />
            </div>

            <button onClick={handleAddToCart} className="add-to-cart-btn">
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
        <img className="product-image" src={product.image} alt={product.name} />
      </div>
      <div className="w-100% flex">
        <div className="product-des">
          <p className="text-[#273172] font-bold text-xl mb-5">
            MÔ TẢ SẢN PHẨM
          </p>
          {product.des}
        </div>
      </div>
    </div>
  ) : (
    <div>Sản phẩm không có</div>
  );
}

export default ProductDetail;
