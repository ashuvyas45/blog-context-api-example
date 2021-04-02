import React from "react";

const UserContext = React.createContext({ name: "defaultUserName" });

export const WithUser = (Component) => {
  return (props) => {
    return (
      <UserContext.Consumer>
        {({ name }) => {
          <Component name={name} {...props} />;
        }}
      </UserContext.Consumer>
    );
  };
};

export default UserContext;
