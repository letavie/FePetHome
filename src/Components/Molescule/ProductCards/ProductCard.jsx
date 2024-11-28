import React from "react";
import Text from "../../Atom/Text/Text";
import "./ProductCards.scss";

function ProductCard({
    status,
    img,
    content,
    forType,
    className,
    onClick,
    price,
}) {
    const displayStatus = status === "In stock" ? "Còn hàng" : status === "out of stock" ? "Hết hàng" : status;

    return (
        <div
            className={`product-card-container ${className}`}
            onClick={onClick}>
            <div className="product-card-detail">
                <div className="product-img">
                    <img src={img} alt="Product" />
                </div>
                <div className="product-card-current">
                    <Text
                        className="product-card-current-text"
                        content={displayStatus}
                    />
                </div>
                <div>
                    <Text
                        className="product-card-whichpet"
                        content={forType}
                    />
                </div>
                <div>
                    <Text
                        className="product-card-detail"
                        content={content}
                    />
                </div>
                <div>
                    <Text
                        className="product-card-price"
                        content={price}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
