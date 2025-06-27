import React, { useState } from "react";
import "./ProductCardStyles.css";

export default function ProductCard({ product, isChecked, onToggle, activeTab }) {
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    return (
        <div
            className={`product-card ${isChecked ? "selected" : ""}`}
            style={{
                border: selectedColor ? `2px solid ${selectedColor}` : isChecked ? "2px solid #4E008E" : undefined,
            }}
        >
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onToggle(product.id)}
                />
            </label>

            {activeTab === "store" && (
                <span className="cansel-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <line
                            x1="18"
                            y1="6"
                            x2="6"
                            y2="18"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <line
                            x1="6"
                            y1="6"
                            x2="18"
                            y2="18"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </span>
            )}

            <div className="product-name">{product.name}</div>
            <img
                src={product.image}
                alt={product.name}
                className="product-image"
            />

            <div className="color-dots">
                {product.colors.map((color, index) => (
                    <span
                        key={index}
                        className={`color-dot ${
                            selectedColor === color ? "active" : ""
                            }`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorClick(color)}
                    />
                ))}
            </div>

            <div className="product-price">${product.price.toFixed(2)}</div>
        </div>
    );
}
