import React, { createContext, useContext, useState } from 'react';

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [savedIds, setSavedIds] = useState([]);
  const [cart, setCart] = useState({});

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
  return (
<StoreContext.Provider
  value={{ savedIds, toggleSaved, cart, addToCart, removeFromCart }}
>      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}