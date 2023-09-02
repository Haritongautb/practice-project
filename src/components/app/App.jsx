import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";

import MainLayout from "../../layouts/main-layout/MainLayout";
import Home from "../../pages/home/Home";
import Contacts from "../../pages/contacts/Contacts";
import Login from "../../pages/login/Login";
import Signup from "../../pages/sign-up/Signup";
import Gallery from "../../pages/gallery/Gallery";
import NotFound from "../../pages/not-found/NotFound";

import "./app.scss";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Routes>
      <Route path="/" element={<MainLayout isOpen={isOpen} setIsOpen={setIsOpen} />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
