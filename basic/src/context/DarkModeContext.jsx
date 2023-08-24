import { createContext, useState } from "react";

// the context
export const DarkModeContext = createContext();

// Umbrella higher-order component (determine the range for the context)
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(mode => !mode);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}