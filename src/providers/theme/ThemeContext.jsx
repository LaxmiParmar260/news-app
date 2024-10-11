import { createContext, useReducer } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const initialState = {
    dark: JSON.parse(localStorage.getItem("dark")),
  };

  const ThemeReducer = (state, action) => {
    if (action.type === "CHANGE_THEME") {
      //local storage
      localStorage.setItem("dark", JSON.stringify(state.dark ? false : true));
      return {
        ...state,
        dark: state.dark ? false : true,
      };
    }
  };

  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      {" "}
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
