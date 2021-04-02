import React from "react";
import { WithTheme } from "./ThemContext";
import { WithUser } from "./UserContext";

const User = ({ color, name }) => {
  return <div style={{ color: color }}>{name}</div>;
};

export default WithUser(WithTheme(User));
