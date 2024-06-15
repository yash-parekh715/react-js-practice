import React from "react";
import UserContextProvider from "./context/userContextProvider";
import Profile from "./components/profile";
import Login from "./components/login";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
