import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import Header from "./pages/header";
import Home from "./pages/Home";
import About from "./pages/About";
import Inventory from "./pages/Inventory";
import Transaction from "./pages/Transaction";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Register from './pages/Register';
import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {url} from './config.js'


const App = () => {

  const [isLog, setLog] = useState(false);
  const handleLogin = (log) => setLog(log);

  useEffect(() => {
    get();
  },);

  const get = async () => {
    if (!isLog) {
      const response = await axios.get(`${url}/isLogin`, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      if (response.status === 200) {
        const res = response.data;
        if (res.status === true) {
          toast(res.message);
          handleLogin(true);
        }
        else console.log(false);
      }
      else {
        toast("can't find session please login");
      }
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header isLog={handleLogin} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Routes>
          <Route exact path="/" element={!isLog ? <Login isLog={handleLogin} /> : <Navigate to='/home' />} />
          <Route exact path="/register" element={!isLog ? <Register isLog={handleLogin} /> : <Navigate to='/home' />} />
          <Route exact path="/home" element={isLog ? <Home /> : <Login isLog={handleLogin} />} />
          <Route exact path="/transaction" element={isLog ? <Transaction /> : <Login isLog={handleLogin} />} />
          <Route exact path="/inventory" element={isLog ? <Inventory /> : <Login isLog={handleLogin} />} />
          <Route exact path="/help" element={<Help />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

}

export default App;