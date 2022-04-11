import { BrowserRouter, Route,Routes} from "react-router-dom";
import './App.css'
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Card from "./pages/Card";
import Detail from "./pages/Detail";
import { useSelector } from "react-redux";



function App() {
  console.log("selector" , useSelector(state=>state.theme))

  return (
    <div className="App">
    
    <BrowserRouter>
    <Header/>
    <Routes>

    
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/card/:id" element={<Card />} />
      <Route path="card" element={<Card />} />

      
    </Routes>
    <Footer/>
  </BrowserRouter>
  
    
    </div>
  );
}

export default App;
