import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "./pages/Dashboard";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path='/dashboard/:username' element={
          <ProtectedRoutes>
            <Dashboard/>
          </ProtectedRoutes>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;