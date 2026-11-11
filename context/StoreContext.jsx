import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { foods } from '../data/foods';


const CART_KEY = '@unibites/cart-v1';
const SAVED_KEY = '@unibites/saved-v1';
const ORDERS_KEY = '@unibites/orders-v1';
const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [savedIds, setSavedIds] = useState([]);
  const [cart, setCart] = useState({});
  const [orders, setOrders] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
  async function loadData() {
    try {
      const [savedCart, savedItems, savedOrders] = await Promise.all([
        AsyncStorage.getItem(CART_KEY),
        AsyncStorage.getItem(SAVED_KEY),
        AsyncStorage.getItem(ORDERS_KEY),
      ]);

      if (savedCart) setCart(JSON.parse(savedCart));
      if (savedItems) setSavedIds(JSON.parse(savedItems));
      if (savedOrders) setOrders(JSON.parse(savedOrders));
    } catch (error) {
      console.warn('Could not load saved app data', error);
    } finally {
      setReady(true);
    }
  }

  loadData();
}, []);

useEffect(() => {
  if (!ready) return;

  Promise.all([
    AsyncStorage.setItem(CART_KEY, JSON.stringify(cart)),
    AsyncStorage.setItem(SAVED_KEY, JSON.stringify(savedIds)),
    AsyncStorage.setItem(ORDERS_KEY, JSON.stringify(orders)),
  ]).catch((error) => {
    console.warn('Could not save app data', error);
  });
}, [cart, savedIds, orders, ready]);


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