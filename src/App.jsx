import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import FandQ from './pages/FandQ/FandQ';
import VaccineForm from './pages/VaccineForm/VaccineForm';
import Consultation from './pages/Consultation/Consultation';
import HomeVisit from './pages/HomeVisit/HomeVisit';
import Kucing from './pages/Kucing/Kucing';
import Anjing from './pages/Anjing/Anjing';
import Persiapan from './pages/Kucing/Persiapan/Persiapan';
import Jenis from './pages/Kucing/Jenis/Jenis';
import Pertimbangan from './pages/Kucing/Pertimbangan/Pertimbangan';
import Perawatan from './pages/Kucing/Perawatan/Perawatam';
import Pemahaman from './pages/Kucing/Pemahaman/Pemahaman';
import Kesehatan from './pages/Kucing/Kesehatan/Kesehatan';
import JenisAnjing from './pages/Anjing/Jenis/JenisAnjing';
import PerawatanAnjing from './pages/Anjing/Perawatan/PerawatanAnjing';
import PersiapanAnjing from './pages/Anjing/Persiapan/PersiapanAnjing';
import PertimbanganAnjing from './pages/Anjing/Pertimbangan/PertimbanganAnjing';
import PerilakuAnjing from './pages/Anjing/Perilaku/PerilakuAnjing';
import KesehatanAnjing from './pages/Anjing/Kesehatan/KesehatanAnjing';


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="fandq" element={<FandQ />} />
            <Route path="services/vaccineform" element={<VaccineForm />} />
            <Route path="services/homevisit" element={<HomeVisit />} />
            <Route path="services/consultation" element={<Consultation />} />
            <Route path="pet/cat" element={<Kucing />} />
            <Route path="pet/cat/persiapan" element={<Persiapan />} />
            <Route path="pet/cat/jenis" element={<Jenis />} />
            <Route path="pet/cat/pertimbangan" element={<Pertimbangan />} />
            <Route path="pet/cat/perawatan" element={<Perawatan />} />
            <Route path="pet/cat/pemahaman" element={<Pemahaman />} />
            <Route path="pet/cat/kesehatan" element={<Kesehatan />} />
            <Route path="pet/dog" element={<Anjing />} />
            <Route path="pet/dog/jenis" element={<JenisAnjing />} />
            <Route path="pet/dog/perawatan" element={<PerawatanAnjing />} />
            <Route path="pet/dog/persiapan" element={<PersiapanAnjing />} />
            <Route path="pet/dog/pertimbangan" element={<PertimbanganAnjing />} />
            <Route path="pet/dog/perilaku" element={<PerilakuAnjing />} />
            <Route path="pet/dog/kesehatan" element={<KesehatanAnjing />} />
        </Routes>
    )
}