import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkmode = () => {
    setDarkMode((darkmode) => !darkmode); //!darkMode 와 동일함
    updateDarkMode(!darkMode);
  };
  useEffect(()=>{
    const isDark = 
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && 
      window.matchMedia('prefers-color-scheme:dark').matches);
      setDarkMode(isDark);
      updateDarkMode(isDark);

  },[])
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
    localStorage.theme = 'dark';
  }else{
    document.documentElement.classList.remove("dark");
    localStorage.theme = 'light';
  }
}
export const useDarkMode = () => useContext(DarkModeContext);
