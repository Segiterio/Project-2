import React, { createContext, useState } from "react";
export const AppContext = createContext();
export default function AppContextProvider({ children }) {
  const [scrollId, setScrollId] = useState(null);
  const value = {
    scrollId,
    setScrollId,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
