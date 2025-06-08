import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePageBeforeLogin';
import LoginPage from './pages/LoginPage';

function App(){
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;