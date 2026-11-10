import React, { createContext, useContext, useState } from 'react';
import { foods } from '../data/foods';

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [savedIds, setSavedIds] = useState([]);
  const [cart, setCart] = useState({});
  const [orders, setOrders] = useState([]);


  function toggleSaved(id) {
    setSavedIds((currentIds) => {
      if (currentIds.includes(id)) {
        return currentIds.filter((savedId) => savedId !== id);
      }

      return [...currentIds, id];
    });
  }
  function addToCart(id) {
  setCart((currentCart) => ({
    ...currentCart,
    [id]: (currentCart[id] || 0) + 1,
  }));
}

function removeFromCart(id) {
  setCart((currentCart) => {
    const nextCart = { ...currentCart };

    if (!nextCart[id]) {
      return nextCart;
    }

    if (nextCart[id] === 1) {
      delete nextCart[id];
    } else {
      nextCart[id] -= 1;
    }

    return nextCart;
  });
}
function placeOrder() {
  const items = Object.entries(cart).map(([foodId, quantity]) => ({
    foodId,
    quantity,
  }));

  if (items.length === 0) {
    return;
  }

  const total = items.reduce((sum, item) => {
    const food = foods.find((dish) => dish.id === item.foodId);
    return sum + (food ? food.price * item.quantity : 0);
  }, 0);

  const newOrder = {
    id: `UB-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString(),
    items,
    total,
    status: 'Saved on this device',
  };

  setOrders((currentOrders) => [newOrder, ...currentOrders]);
  setCart({});
}
  return (
<StoreContext.Provider
  value={{ savedIds, toggleSaved, cart, addToCart, removeFromCart, orders, placeOrder  }}
>      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}