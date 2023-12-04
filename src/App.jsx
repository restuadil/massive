import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Services from './pages/Services/Services';
import FandQ from './pages/FandQ/FandQ';
import Article from './pages/Article/Article';
import VaccineForm from './pages/VaccineForm/VaccineForm';
import Consultation from './pages/Consultation/Consultation';
import HomeVisit from './pages/HomeVisit/HomeVisit';
import Kucing from './pages/Kucing/Kucing';
import Anjing from './pages/Anjing/Anjing';
import Persiapan from './pages/Kucing/Persiapan/Persiapan';
import Jenis from './pages/Kucing/Jenis/Jenis';


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="services" element={<Services />} />
            <Route path="fandq" element={<FandQ />} />
            <Route path="article" element={<Article />} />
            <Route path="services/vaccineform" element={<VaccineForm />} />
            <Route path="services/homevisit" element={<HomeVisit />} />
            <Route path="services/consultation" element={<Consultation />} />
            <Route path="pet/cat" element={<Kucing />} />
            <Route path="pet/cat/persiapan" element={<Persiapan />} />
            <Route path="pet/cat/jenis" element={<Jenis />} />
            <Route path="pet/dog" element={<Anjing />} />
        </Routes>
    )
}