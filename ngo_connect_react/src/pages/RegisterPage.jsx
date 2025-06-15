import axios from 'axios';
import { useState } from 'react';

export default function RegisterPage() {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async () => {
        try{
            const response = await axios.post("http://localhost:5000/users/register", {
                email, 
                username,
                password
            })

            alert(response.data.message);
        } catch(err) {
            if(err.response)
                alert(err.response.data.message)
            else
            alert("something went wrong")
        }
    }

    return(
        <div>
            <form action="register">
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </form>
            <button onClick={handleRegister}>Register</button>
        </div>
    )
}