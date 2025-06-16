import { Navigate } from "react-router-dom"

export default function ProtectedRoutes({ children }){
    const isLoggedIn = sessionStorage.getItem('isLoggedIn')

    if(!isLoggedIn)
        return <Navigate to='/'/>

    return children
}