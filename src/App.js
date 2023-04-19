import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Report from "./pages/Report";
import Transaction from "./pages/Transaction";
import Setting from "./pages/Setting";
import EditProduct from "./pages/EditProduct";
import EditCategory from "./pages/EditCategory";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/category" element={<Category />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report" element={<Report />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/editproduct/:id" element={<EditProduct />} />
          <Route path="/editcategory" element={<EditCategory />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
