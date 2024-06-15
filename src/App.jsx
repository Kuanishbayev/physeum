import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css"
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import DashboardSignIn from "./pages/DashboardSignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<DashboardSignIn />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App