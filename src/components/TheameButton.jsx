import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeContext from "../providers/theme/ThemeContext";

const TheameButton = () => {
  const { dark, dispatch } = useContext(ThemeContext);

  const handleThemeChange = () => {
    if (dark) {
      localStorage.setItem("dark", JSON.stringify(false));
    } else {
      localStorage.setItem("dark", JSON.stringify(true));
    }

    
    dispatch({ type: "CHANGE_THEME" });
  };

  return (
    <button
      id="themeBtn"
      onClick={handleThemeChange}
      className={
        dark
          ? "btn btn-sm btn-warning text-light"
          : "btn btn-sm btn-dark  text-light"
      }
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default TheameButton;
