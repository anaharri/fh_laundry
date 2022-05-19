import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing.js";
import Sheets from "./Sheets.js";
import NewOrder from "./NewOrder.js";
import OrderDetail from "./OrderDetail.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route exact path="/list" element={<Sheets />} />
        <Route path="/orders/detail" element={<OrderDetail />} />
        <Route path="/orders/new" element={<NewOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
