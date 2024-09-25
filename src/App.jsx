import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import './App.css'; // เราใช้ App.css สำหรับจัดสไตล์

const productsData = [
  { id: 1, name: 'เสื้อ 1', price: 990, image: 'https://twicpics.celine.com/product-prd/images/large/2Y468670Q.01QI_1_SS24_P1_M.jpg?twic=v1/cover=1:1/resize-max=900' },
  { id: 2, name: 'เสื้อ 2', price: 1190, image: 'https://twicpics.celine.com/product-prd/images/large/2V191000G.38NO_1_SUM22.jpg?twic=v1/cover=1:1/resize-max=900' },
  { id: 3, name: 'เสื้อ 3', price: 990, image: 'https://twicpics.celine.com/product-prd/images/large/2Y959670Q.09GB_1_SUM23.jpg?twic=v1/cover=1:1/resize-max=900' },
  { id: 4, name: 'เสื้อ 4', price: 1990, image: 'https://twicpics.celine.com/product-prd/images/large/2ADCX616Y.38EC_1_SS24_P1_M_V2.jpg?twic=v1/resize-max=2000/quality-min=100' },
  { id: 5, name: 'เสื้อ 5', price: 890 ,image: 'https://twicpics.celine.com/product-prd/images/large/2X681671Q.38AW_1_WIN21_M.jpg?twic=v1/resize-max=2000/quality-min=100' },
  { id: 6, name: 'เสื้อ 6', price: 1290, image: 'https://twicpics.celine.com/product-prd/images/large/2Y70F670Q.38WL_1_SS24_P1_W.jpg?twic=v1/cover=1:1/resize-max=480' },
  { id: 7, name: 'เสื้อ 7', price: 2590, image: 'https://twicpics.celine.com/product-prd/images/large/2V56D896C.39NJ_1_SS24_P1_M.jpg?twic=v1/cover=1:1/resize-max=480' },
  { id: 8, name: 'เสื้อ 8', price: 1190, image: 'https://twicpics.celine.com/product-prd/images/large/RY037510Z.38AW_1_FW24_P1_M.jpg?twic=v1/resize-max=2000/quality-min=100' },
  { id: 9, name: 'เสื้อ 9', price: 2890, image: 'https://twicpics.celine.com/product-prd/images/large/2V56D896C.38NO_1_WIN22_V9.jpg?twic=v1/cover=1:1/resize-max=900' },
  { id: 10, name: 'เสื้อ 10', price: 990 , image: 'https://www.preduce.com/cdn/shop/files/D4_1024x1024.jpg?v=1689918233' },
  { id: 11, name: 'เสื้อ 11', price: 790, image: 'https://twicpics.celine.com/product-prd/images/large/2X65M873W.01JT_1_SS24_P1_M.jpg?twic=v1/cover=1:1/resize-max=900' },
  { id: 12, name: 'เสื้อ 12', price: 750, image: 'https://www.preduce.com/cdn/shop/files/D1_1024x1024.jpg?v=1689917194' },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <div className="App">
      <div className="product-list">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
}

export default App;