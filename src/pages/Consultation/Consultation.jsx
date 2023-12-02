import CardDoctor from "../../components/Card/CardDoctor/CardDoctor";
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import { CgSearch } from "react-icons/cg";
import { doctor } from "../../Utils/dataDoctor";
const Consultation = () => {

    return (
        <>
            <Navbar logo="../../img/logo.png" />
            <div className="flex flex-row justify-end mr-4 py-10">
                <div className="bg-slate-100 py-3 flex flex-row gap-1 items-center px-10 rounded-md border-slate-300 border-2">
                    <label htmlFor="find"></label>
                    <CgSearch className="text-2xl" />
                    <input type="text" name="find" id="find" placeholder="Cari dokter" className="px-5 bg-transparent" />
                </div>
            </div>
            <div className="flex flex-col mx-10 gap-3">
                <CardDoctor doctor={doctor} />
            </div>
            <Footer logo="../../img/logo.png" bg={`url("../../img/bg.png")`} />
        </>
    )
}

export default Consultation