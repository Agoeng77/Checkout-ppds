import DigitalResep from "./pages/DigitalResep/DigitalResep";

import "./App.css";
import Checkout from "./pages/Checkout/Checkout";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/digital-resep" element={<DigitalResep />} />

        <Route path="/checkout" element={<Checkout />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
