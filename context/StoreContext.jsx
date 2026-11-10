import React, { createContext, useContext, useState } from 'react';

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [savedIds, setSavedIds] = useState([]);

  function toggleSaved(id) {
    setSavedIds((currentIds) => {
      if (currentIds.includes(id)) {
        return currentIds.filter((savedId) => savedId !== id);
      }

      return [...currentIds, id];
    });
  }

  return (
    <StoreContext.Provider value={{ savedIds, toggleSaved }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}