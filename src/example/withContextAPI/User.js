import React from "react";
import ThemeContext from "./ThemContext";
import UserContext from "./UserContext";

const User = () => {
  return (
    <UserContext.Consumer>
      {(context) => (
        <ThemeContext.Consumer>
          {(theme) => <div style={{color: theme.color}}>{context.name}</div>}
        </ThemeContext.Consumer>
      )}
    </UserContext.Consumer>
  );
};

export default User;
