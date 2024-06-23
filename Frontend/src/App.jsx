import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from "react-bootstrap"
import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Container>
        <Outlet/>
      </Container>
      <Footer />
    </>
  );
};

export default App;
