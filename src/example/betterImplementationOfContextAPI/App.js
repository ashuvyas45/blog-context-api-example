import React from "react";
import Card from "./Card";
import ThemeContext from "./ThemContext";
import UserContext from "./UserContext";

function App() {
  return (
    <UserContext.Provider value={{ name: "user name" }}>
      <ThemeContext.Provider value={{ color: "red" }}>
        <Card></Card>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
