import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import AboutUs from './pages/AboutUs/AboutUs';


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="aboutus" element={<AboutUs />} />
        </Routes>
    )
}