import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="flex items-center justify-center bg-blue-200 w-full left-0 top-0 h-20 gap-x-20">
            <Link to='/' className="hover:underline">NGO-Connect</Link>
            <Link to='/' className="hover:underline">Home</Link>
            <Link to='/login' className="hover:underline">Login</Link>
            <Link to='/regiter' className="hover:underline">Register</Link>
        </div>
    );
}