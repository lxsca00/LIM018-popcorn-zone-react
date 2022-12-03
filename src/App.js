import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "./pages/Welcome";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Error404 } from "./pages/Error";

export const UserContext = React.createContext();

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const values = { name, setName, email, setEmail, password, setPassword };

  return (
    <UserContext.Provider value={values}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="error" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
