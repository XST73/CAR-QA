"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type SidenavType = "transparent" | "dark";
export type SidenavColor = "blue" | "white";
export type Theme = "light" | "dark";

interface ThemeContextProps {
  sidenavType: SidenavType;
  sidenavColor: SidenavColor;
  theme: Theme;
  applyTheme: (t: string | undefined) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [sidenavType, setSidenavType] = useState<SidenavType>("transparent");
  const [sidenavColor, setSidenavColor] = useState<SidenavColor>("blue");
  const [theme, setTheme] = useState<Theme>("light");

  const applyTheme = (t : string | undefined ) => {
    setTheme(t === "light" ? "light" : "dark");
    setSidenavType(t === "light" ? "transparent" : "dark");
    setSidenavColor(t === "light" ? "blue" : "white");
  };

  return (
    <ThemeContext.Provider value={{ sidenavType, sidenavColor, theme, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
