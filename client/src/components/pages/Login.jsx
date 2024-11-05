import React, { useState } from "react";
import { motion } from "framer-motion";
import Input from "../motion/Input";
import { Loader, LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoading = false;
  const handleSubmit = (e) => {
    e.preventDefault();
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
          <motion.button
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-lg transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Loader className="text-white mx-auto animate-spin"/> : "Log In"}
          </motion.button>
         <Link to={'/forgot-password'}><p className="text-gray-300 p-2">Forgot Password ?</p></Link> 
        </form>
      </div>
      <div className="bg-gray-900 text-gray-400 text-center p-4 ">
        Create an account?{" "}
        <Link className="text-pink-600" to={"/signup"}>
          {" "}
          Sign Up{" "}
        </Link>
      </div>
    </motion.div>
  );
};

export default Login;
