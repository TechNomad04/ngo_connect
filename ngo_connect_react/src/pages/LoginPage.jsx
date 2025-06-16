import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const handleLogin = async () => {
        try{
            const response = await axios.post("http://localhost:5000/users/login", {
                email, 
                username,
                password
            })

            if(response.data.status){
                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('username', username);
                navigate(`/dashboard/${username}`)
            }
        } catch(err) {
            if(err.response)
                alert(err.response.data.message)
            else
            alert(err)
        }
    }

    return (
        <div>
            <form action="login">
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" 
                            value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text"
                            value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" 
                            value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </form>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default LoginPage;