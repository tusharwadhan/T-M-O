import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Header from "./pages/header";
import Home from "./pages/Home";
import About from "./pages/About";
import Inventory from "./pages/Inventory";
import Transaction from "./pages/Transaction";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Register from './pages/Register';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


class App extends React.Component {
  state = {
    isLog: false
  }

  handleLogin = (isLog) => this.setState({ isLog });

  get = async() =>{
    const response = await axios.get("https://t-m-o.herokuapp.com/users");
    if(response.status === 200){
      this.handleLogin(true);
    }
  }

  render() {
    const { isLog } = this.state;
    this.get();
    return (
      <BrowserRouter>
        <div className="App">
          <Header isLog={this.handleLogin}/>
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
            <Route exact path="/" element={!isLog ? <Login isLog={this.handleLogin} /> :<Navigate to='/home'/>} />
            <Route exact path="/register" element={!isLog ? <Register isLog={this.handleLogin} /> :<Navigate to='/home'/>} />
            <Route exact path="/home" element={isLog ? <Home /> :<Login isLog={this.handleLogin}/>} />
            <Route exact path="/transaction" element={isLog ? <Transaction /> :<Login isLog={this.handleLogin} />} />
            <Route exact path="/inventory" element={isLog ? <Inventory /> :<Login isLog={this.handleLogin} />} />
            <Route exact path="/help" element={<Help />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;