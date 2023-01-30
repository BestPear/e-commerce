import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
// import Admin from "./pages/Admin";
import Laptops from "./pages/Laptops";
import Mobiles from "./pages/Mobiles";
import Accessories from "./pages/Accessories";
import Cart from "./pages/Cart";
import AdminLogin from "./components/AdminLogin";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/profile/admin" element={<Admin />} /> */}
            <Route path="/auth/adminlogin" element={<AdminLogin />}></Route>

            <Route element={<AdminPage />} path="/profile/admin"></Route>
            <Route path="/profile/category/mobile" element={<Mobiles />} />
            <Route path="/profile/category/laptops" element={<Laptops />} />
            <Route
              path="/profile/category/accessories"
              element={<Accessories />}
            />
            <Route path="/profile/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
