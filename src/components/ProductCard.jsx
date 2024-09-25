import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2> {/* เพิ่มคลาสนี้ */}
      <p className="product-price">ราคา: {product.price} บาท</p>
      <button onClick={() => onAddToCart(product)}>เพิ่มในตะกร้า</button>
    </div>
  );
};

export default ProductCard;
