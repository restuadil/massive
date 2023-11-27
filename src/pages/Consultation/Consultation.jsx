import CardDoctor from "../../components/Card/CardDoctor/CardDoctor";
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import { CgSearch } from "react-icons/cg";

const Consultation = () => {
    const doctor = [
        {
            name: "drh.Alexandra",
            img: "img/ava.png",
            strv: "2.06.010411.04.2021.04",
            pet: "Kucing",
            star: 5,
            job: "3 Tahun",
            price: 50.000,
            location: "Kediri, Jawa Timur",
            jadwal: ["Senin 10:00 - 13:00 WIB",
                "Selasa 10:00 - 13:00 WIB",
                "Rabu 10:00 - 13:00 WIB",
                "Kamis 18:00 - 20:00 WIB",
                "Jumat 18:00 - 20:00 WIB"]
        },
        {
            name: "drh.Alexandra",
            img: "img/ava.png",
            strv: "2.06.010411.04.2021.04",
            pet: "Kucing",
            star: 5,
            job: "3 Tahun",
            price: 50.000,
            location: "Kediri, Jawa Timur",
            jadwal: ["Senin 10:00 - 13:00 WIB",
                "Selasa 10:00 - 13:00 WIB",
                "Rabu 10:00 - 13:00 WIB",
                "Kamis 18:00 - 20:00 WIB",
                "Jumat 18:00 - 20:00 WIB"]
        },
        {
            name: "drh.Alexandra",
            img: "img/ava.png",
            strv: "2.06.010411.04.2021.04",
            pet: "Kucing",
            star: 5,
            job: "3 Tahun",
            price: 50.000,
            location: "Kediri, Jawa Timur",
            jadwal: ["Senin 10:00 - 13:00 WIB",
                "Selasa 10:00 - 13:00 WIB",
                "Rabu 10:00 - 13:00 WIB",
                "Kamis 18:00 - 20:00 WIB",
                "Jumat 18:00 - 20:00 WIB"]
        },
        {
            name: "drh.Alexandra",
            img: "img/ava.png",
            strv: "2.06.010411.04.2021.04",
            pet: "Kucing",
            star: 5,
            job: "3 Tahun",
            price: 50.000,
            location: "Kediri, Jawa Timur",
            jadwal: ["Senin 10:00 - 13:00 WIB",
                "Selasa 10:00 - 13:00 WIB",
                "Rabu 10:00 - 13:00 WIB",
                "Kamis 18:00 - 20:00 WIB",
                "Jumat 18:00 - 20:00 WIB"]
        },
        {
            name: "drh.Alexandra",
            img: "img/ava.png",
            strv: "2.06.010411.04.2021.04",
            pet: "Kucing",
            star: 5,
            job: "3 Tahun",
            price: 50.000,
            location: "Kediri, Jawa Timur",
            jadwal: ["Senin 10:00 - 13:00 WIB",
                "Selasa 10:00 - 13:00 WIB",
                "Rabu 10:00 - 13:00 WIB",
                "Kamis 18:00 - 20:00 WIB",
                "Jumat 18:00 - 20:00 WIB"]
        },
    ]
    return (
        <>
            <Navbar />
            <div className="flex flex-row justify-end mr-4 py-10">
                <div className="bg-slate-100 py-3 flex flex-row gap-1 items-center px-10 rounded-md border-slate-300 border-2">
                    <label htmlFor="find"></label>
                    <CgSearch className="text-2xl" />
                    <input type="text" name="find" id="find" placeholder="Cari dokter" className="p-1 bg-transparent" />
                </div>
            </div>
            <div className="flex flex-col mx-10 gap-3">
                <CardDoctor doctor={doctor} />
            </div>
            <Footer />
        </>
    )
}

export default Consultation