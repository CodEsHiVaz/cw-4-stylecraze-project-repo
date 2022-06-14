import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import Products from "./components/pages/Products/Products";
import Home from "./components/pages/Home/Home";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/aboutus"} element={<AboutUs />}></Route>
        <Route path={"/products"} element={<Products />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
