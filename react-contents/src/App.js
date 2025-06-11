import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePageBLogin from './pages/HomePageBLogin';

function App(){
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePageBLogin/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/home' element={<HomePageBLogin/>}/>
      </Routes>
    </div>
  );
}

export default App;