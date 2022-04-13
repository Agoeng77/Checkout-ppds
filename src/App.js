import DigitalResep from "./pages/DigitalResep/DigitalResep";

import "./App.css";
import Checkout from "./pages/Checkout/Checkout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CariAlamat from "./pages/CariAlamat/CariAlamat";
import DaftarAlamat from "./pages/DaftarAlamat/DaftarAlamat";
import MapsPinpoint from "./MapsPinpoint/MapsPinpoint";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/digital-resep" element={<DigitalResep />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/daftar-alamat" element={<DaftarAlamat />} />

        <Route path="/cari-alamat" element={<CariAlamat />} />

        <Route path="/maps-pinpoint" element={<MapsPinpoint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
