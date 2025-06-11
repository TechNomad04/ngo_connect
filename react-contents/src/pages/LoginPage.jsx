import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home')
  }

  return (
    <div>
      <Navbar/>
      <div className="bg-blue-50 h-screen flex justify-center items-center">
        <div className="bg-white flex flex-col justify-center items-center py-10 px-20 gap-8 rounded-xl">
          <div className="text-center">
            <div className="text-2xl mb-1 font-bold text-gray-700 font-sans">Welcome Back</div>
            <div className="text-gray-500 font-sans text-lg">Enter your credentials to access your account</div>
          </div>
          <form action="login" className="flex flex-col justify-center items-center gap-4">
            <div className="flex justify-center items-center gap-2 text-gray-700">
              <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" className="w-6 h-6"/>
              <input type="text" className="border-none focus:outline-none px-1" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex justify-center items-center gap-2">
              <img src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" className="w-6 h-6"/>
              <input type="password" className="border-none focus:outline-none px-1" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </form>
          <button className="bg-blue-500 w-full rounded-xl h-10 text-white" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}
