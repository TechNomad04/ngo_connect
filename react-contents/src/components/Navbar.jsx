import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="flex items-center justify-center bg-blue-500 w-full left-0 top-0 h-20 gap-x-20">
            <Link to='/' className="hover:underline text-white font-bold text-2xl">NGO-Connect</Link>
            <Link to='/' className="hover:underline text-white font-bold text-2xl">Home</Link>
            <Link to='/login' className="hover:underline text-white font-bold text-2xl">Login</Link>
            <Link to='/register' className="hover:underline text-white font-bold text-2xl">Register</Link>
        </div>
    );
}