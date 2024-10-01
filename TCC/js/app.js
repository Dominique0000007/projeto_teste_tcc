import React, { useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Ração para Cães', price: 20.99 },
    { id: 2, name: 'Brinquedo para Gatos', price: 15.99 },
    { id: 3, name: 'Coleira para Cães', price: 10.99 },
  ]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1>Produtos</h1>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <h2>{product.name}</h2>
                <p>Preço: R${product.price}</p>
                <button onClick={() => handleAddToCart(product)}>Adicionar ao carrinho</button>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h1>Carrinho</h1>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <h2>{product.name}</h2>
                <p>Preço: R${product.price}</p>
                <button onClick={() => handleRemoveFromCart(product)}>Remover do carrinho</button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;