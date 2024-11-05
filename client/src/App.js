import "./App.css";
import FloatingShapes from "./components/motion/FloatingShapes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import ForgotPassword from "./components/pages/ForgotPassword";
import VerifyEmail from "./components/pages/VerifyEmail";
import { Toaster } from "react-hot-toast";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-600 to-pink-700 flex justify-center overflow-hidden">
        <FloatingShapes
          color="bg-yellow-200"
          size="w-64 h-64"
          top="-5%"
          left="10%"
          delay={0}
        />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
      <Toaster />
      </div>
    </>
  );
}

export default App;
