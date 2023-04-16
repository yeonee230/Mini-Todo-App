import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkmode = () => {
    setDarkMode((darkmode) => !darkmode); //!darkMode 와 동일함
    updateDarkMode(!darkMode);
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkmode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode) {
  if (darkMode) {
    //ture = 다크모드라는 의미
    document.documentElement.classList.add("dark");
  }else{
    document.documentElement.classList.remove("dark");
  }
}
export const useDarkMode = () => useContext(DarkModeContext);
