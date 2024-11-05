import React, { useState } from "react";
import { motion } from "framer-motion";
import { Loader, Loader2, User2 } from "lucide-react";
import { Mail } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import Input from "../motion/Input";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../motion/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signup, isLoading, error} = useAuthStore();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, name);
      navigate('/verify-email')
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md h-fit items-center m-auto w-full bg-gray-800 bg-opacity-50 overflow-hidden shadow-xl rounded-2xl backdrop-blur-xl backdrop-filter"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text">
          Create Account
        </h2>
        <form onSubmit={handleSubmit}>
          <Input
            icon={User2}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Adress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={LockKeyhole}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          {/*password strength meter*/}
          <PasswordStrengthMeter password={password}/>


          <motion.button
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-lg transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Loader className="animate-spin mx-auto" size={24} /> : "Sign Up"}
          </motion.button>
        </form>
      </div>
      <div className="bg-gray-900 text-gray-400 text-center p-4 ">
        Already have an account? <Link className="text-pink-600" to={'/login'}>Login</Link>
      </div>
    </motion.div>
  );
};

export default Signup;
