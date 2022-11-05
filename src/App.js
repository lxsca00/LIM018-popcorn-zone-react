import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Welcome } from './pages/Welcome';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Error404 } from './pages/Error';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="error" element={<Error404/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
