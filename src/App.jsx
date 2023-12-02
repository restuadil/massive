import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import AboutUs from './pages/AboutUs/AboutUs';
import Services from './pages/Services/Services';
import FandQ from './pages/FandQ/FandQ';
import Article from './pages/Article/Article';
import VaccineForm from './pages/VaccineForm/VaccineForm';
import Consultation from './pages/Consultation/Consultation';
import HomeVisit from './pages/HomeVisit/HomeVisit';


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="services" element={<Services />} />
            <Route path="fandq" element={<FandQ />} />
            <Route path="article" element={<Article />} />
            <Route path="services/vaccineform" element={<VaccineForm />} />
            <Route path="services/homevisit" element={<HomeVisit />} />
            <Route path="consultation" element={<Consultation />} />
        </Routes>
    )
}