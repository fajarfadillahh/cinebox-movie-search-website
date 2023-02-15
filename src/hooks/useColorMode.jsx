import React, { useEffect } from "react";

// import custom hooks local storage
import useLocalStorage from "./useLocalStorage";

const useColorMode = () => {
  const [colorMode, setCorMode] = useLocalStorage("color-mode", "light");

  useEffect(() => {
    const className = "dark";
    const setDark = document.documentElement.classList;

    colorMode === "dark" ? setDark.add(className) : setDark.remove(className);
  }, [colorMode]);

  return [colorMode, setCorMode];
};

export default useColorMode;
