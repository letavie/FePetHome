import React, { useState, useEffect } from "react";
import "./ProductSearch.scss";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "Components/Molescule/ProductCards/ProductCard";
import MyAxios from "../../../../setup/configAxios";
import { motion } from "framer-motion";
import petCover from "assets/images/pet-cover.webp";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function ProductSearch() {
    const query = useQuery();
    const searchQuery = query.get("query");
    const [products, setProducts] = useState([]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(495000);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);   

    useEffect(() => {
        if (searchQuery) {
            MyAxios
                .get(`http://localhost:5000/api/v1/products/search?name=${searchQuery}`)
                .then((response) => {
                    setProducts(response.data); 
                    setLoading(false); 
                })
                .catch((error) => {
                    setError(error);
                    setLoading(false);
                });
        }
    }, [searchQuery]);

    const filteredProducts = products.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice && product.status !== "Disabled"
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    return (
        <div>
            <div className="flex justify-center items-center flex-row space-x-4">
                <div>
                    <motion.h1
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-6xl text-[#222a63] font-bold"
                    >
                        PET HOME
                    </motion.h1>
                    <motion.h1
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-4xl text-[#4c4c4c] font-bold"
                    >
                        Kết quả tìm kiếm
                    </motion.h1>
                </div>
                <div>
                    <img
                        src={petCover}
                        alt="Pet Cover"
                        className="w-[50vw] hidden md:block"
                    />
                </div>
            </div>
            <div className="product-page">
                <div className="filter-section">
                    <h3 className="font-[#222222] font-bold">Lọc theo giá</h3>
                    <input
                        type="range"
                        min="0"
                        max="495000"
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                    />
                    <input
                        type="range"
                        min="0"
                        max="495000"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                    <p>
                        Giá {minPrice.toLocaleString()} đ — {maxPrice.toLocaleString()} đ
                    </p>
                </div>
                <div className="product-list">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <Link to={`/product/${product._id}`} key={product._id}>
                                <ProductCard
                                    key={product._id}
                                    status={product.status}
                                    img={product.image}
                                    content={product.name}
                                    forType={product.forType}
                                    price={`${product.price.toLocaleString()} đ`}
                                />
                            </Link>
                        ))
                    ) : (
                        <div className="no-products-message">Không tìm thấy sản phẩm</div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default ProductSearch;
