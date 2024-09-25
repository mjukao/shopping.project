import React, { useState, useEffect } from 'react';
import './Cart.css'; // นำเข้าไฟล์ CSS ที่ใช้สำหรับจัดสไตล์

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const shippingCost = 100.00;

  useEffect(() => {
    const total = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    setTotalPrice(total);
  }, [cartItems]);

  const applyDiscount = (percent) => {
    setDiscount(percent);
    setIsDiscountApplied(true);
  };

  const discountedPrice = totalPrice - (totalPrice * discount / 100);
  const finalPriceWithShipping = discountedPrice + shippingCost;

  return (
    <div className="cart">
      <h2>ตะกร้าสินค้า</h2>
      {cartItems.length === 0 ? (
        <p>ตะกร้าของคุณว่างเปล่า</p>
      ) : (
        <>
          <ul className="cart-item-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-image" />
                <span>{item.name} - ฿{item.price.toFixed(2)} x {item.quantity}</span>
                <button 
                  onClick={() => onRemoveFromCart(item.id)} 
                  className="remove-item-button"
                  title="ลบสินค้า"
                >
                  &#10060;
                </button>
              </li>
            ))}
          </ul>

          <h3>ราคารวมทั้งหมด: ฿{totalPrice.toFixed(2)}</h3>

          <div className="coupon-section">
            <h3>เลือกส่วนลด</h3>
            <div className="discount-buttons">
              <button onClick={() => applyDiscount(10)}>10%</button>
              <button onClick={() => applyDiscount(20)}>20%</button>
              <button onClick={() => applyDiscount(30)}>30%</button>
            </div>
          </div>

          {isDiscountApplied && (
            <>
              <h3>ส่วนลดที่เลือก: {discount}%</h3>
              <h3>ราคาหลังหักส่วนลด: ฿{discountedPrice.toFixed(2)}</h3>
            </>
          )}

          <h3>ค่าจัดส่ง: ฿{shippingCost.toFixed(2)}</h3>
          <h3>ยอดรวมทั้งหมด: ฿{finalPriceWithShipping.toFixed(2)}</h3>

          <button 
            onClick={() => alert(`ยอดเงินที่ต้องชำระ: ฿${finalPriceWithShipping.toFixed(2)} (รวมค่าส่ง ฿${shippingCost.toFixed(2)})`)} 
            className="checkout-button"
          >
            ชำระเงิน
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
