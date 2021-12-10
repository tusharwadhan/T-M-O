import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
import NotLogin from './pages/NotLogin';
import 'react-toastify/dist/ReactToastify.css';


class App extends React.Component {
  state = {
    isLog: true
  }

  handleLogin = (isLog) => this.setState({ isLog });

  render() {

    const Nav = () => {
      setTimeout(() => {
        document.getElementById('link').click();
      }, 500)
    }
    const { isLog } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
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
          <Link to="/home" id='link' hidden={true}>link</Link>

          <Routes>
            <Route exact path="/" element={!isLog ? <Login isLog={this.handleLogin} /> : Nav()} />
            <Route exact path="/register" element={!isLog ? <Register isLog={this.handleLogin} /> : Nav()} />
            <Route exact path="/home" element={isLog ? <Home /> : <NotLogin />} />
            <Route exact path="/transaction" element={isLog ? <Transaction /> : <NotLogin />} />
            <Route exact path="/inventory" element={isLog ? <Inventory /> : <NotLogin />} />
            <Route exact path="/help" element={<Help />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;