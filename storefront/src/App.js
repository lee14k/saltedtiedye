import './App.css';
import Nav from './components/Nav/nav';
import Home from './components/Home/home';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import AllProducts from "./components/AllProducts/allproducts"


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route path="/about" element = {<AllProducts/>}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
