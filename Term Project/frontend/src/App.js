import "./App.css";
import NavBar from "./Components/NavBar";
import AddItems from "./Pages/AddItems";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Items from "./Pages/Items";
import Footer from "./Components/Footer";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/items" element={<Items/>}/>
        <Route exact path="/addItems" element={<AddItems/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
