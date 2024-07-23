import { createContext, useState } from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme,
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({ theme: "light", toggleTheme: () => {} });

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {setTheme((mode) => (mode === "dark" ? "light" : "dark"))};

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
