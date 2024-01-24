// App.js
import React from 'react';
import { useCart } from './CartContext';

const App = () => {
  const { cartState, addItemToCart, removeItemFromCart, clearCart } = useCart();

  const sampleItems = [
    { id: 1, name: 'Item 1', price: 10.99 },
    { id: 2, name: 'Item 2', price: 14.99 },
    { id: 3, name: 'Item 3', price: 19.99 },
  ];

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <div>
        <h2>Available Items:</h2>
        <ul>
          {sampleItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}{' '}
              <button onClick={() => addItemToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Shopping Cart:</h2>
        <ul>
          {cartState.items.map((cartItem) => (
            <li key={cartItem.id}>
              {cartItem.name} - ${cartItem.price}{' '}
              <button onClick={() => removeItemFromCart(cartItem)}>Remove</button>
            </li>
          ))}
        </ul>
        {cartState.items.length > 0 && (
          <button onClick={clearCart}>Clear Cart</button>
        )}
      </div>
    </div>
  );
};

export default App;
