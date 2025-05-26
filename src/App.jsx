import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Edit from "./pages/Edit";
import User from "./pages/User";
import Notfound from "./pages/Notfound";
import Users from "./pages/Users";
import ServiceDetails from "./components/ServiceDetails";

function App() {
  return (
    <Router>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/profile/edit" element={<Edit />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:username" element={<User />} />
        {/* <Route path="/404" element={<Notfound />} /> */}
        <Route path="*" element={<Notfound />} />
      
      </Routes>
    </Router>
  );
}

export default App;



// https://onedrive.live.com/:w:/g/personal/22029A6D89308DBB/EdkZnj_c35NHhHlulfom1LUB4k1-SZMq0QPnBan7nU1kJA?resid=22029A6D89308DBB!s3f9e19d9dfdc479384796e95fa26d4b5&ithint=file%2Cdocx&wdhostclicktime=1748260498916&web=1&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3cvYy8yMjAyOWE2ZDg5MzA4ZGJiL0Vka1pual9jMzVOSGhIbHVsZm9tMUxVQjRrMS1TWk1xMFFQbkJhbjduVTFrSkE_d2Rob3N0Y2xpY2t0aW1lPTE3NDgyNjA0OTg5MTYmd2ViPTE

// https://www.theblondeabroad.com/
// https://www.matadorequipment.com/
