import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((item) => (item === "light" ? "dark" : "light"));
  };
  if (theme === "dark"){
    document.body.style.backgroundColor = '#000'
    document.querySelectorAll('p').forEach((p) => {
        p.style.color = '#fff'; })
    document.querySelectorAll('h1').forEach((p) => {
    p.style.color = '#fff'; })

  } else {
    document.body.style.backgroundColor = '#fff'
    document.querySelectorAll('p').forEach((p) => {
          p.style.color = '#000'; })
    document.querySelectorAll('h1').forEach((p) => {
    p.style.color = '#000'; })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useTheme };
