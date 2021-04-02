import React from "react";

const ThemeContext = React.createContext({ color: "red" });

export const WithTheme = (Component) => {
  return (props) => {
    return (
      <ThemeContext.Consumer>
        {({ color }) => {
          <Component color={color} {...props} />;
        }}
      </ThemeContext.Consumer>
    );
  };
};

export default ThemeContext;
