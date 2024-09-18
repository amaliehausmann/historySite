import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider(props) {

  const [isLightMode, setIsLightMode] = useState(false);

  function changeTheme() {
    if(isLightMode){
        setIsLightMode(false)
    } else{
        setIsLightMode(true)
    }
  }

  return (
    <ThemeContext.Provider value={{ isLightMode, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}