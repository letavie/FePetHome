import { useState, useEffect } from "react";
import MyAxios from "setup/configAxios";
/// thay đổi bên này thành lấy api từ cái cart
export const ListProdcuts = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    MyAxios.get("http://localhost:5000/api/v1/products?type=product").then((response) => {
      setProducts(response.data);
      console.log("aa", response);
    });
  }, []);
  const productArray = products.map((item) => {
    return {
      id: item._id,
      name: item.name,
      price: item.price,
      image: item.image,
    };
  });
  return productArray;
};
