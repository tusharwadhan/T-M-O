import './App.css';
import { BrowserRouter , Routes ,Route } from "react-router-dom";
import Header from "./pages/header";
import Home from "./pages/Home";
import About from "./pages/About";
import Inventory from "./pages/Inventory";
import Transaction from "./pages/Transaction";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Register from './pages/Register';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route exact path="/" element={<Login login={false}/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/transaction" element={<Transaction/>} />
          <Route exact path="/help" element={<Help/>} />
          <Route exact path="/inventory" element={<Inventory/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;