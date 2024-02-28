import { useSelector } from "react-redux";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";


function App() {
  const data = useSelector((state) => state.allProducts);
 
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />}></Route>
          <Route path="/product/:productId" element={<ProductDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
