import { MdOutlineNavigateNext } from "react-icons/md";
import Footer from "../../components/Footer/Footer"
import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
import Request from "../../components/Request/Request"
import Vaccine from "../../components/Vaccine/Vaccine";
import { dataVaksinKucing } from "../../Utils/dataVaksinKucing";

const Services = () => {

    return (
        <>
            <Navbar />
            <Hero btnContent={"Daftarkan Sekarang"} img={"img/hero.jpeg"} >
                <h2 className="text-white text-4xl font-medium font-chewy mt-20 md:mt-0 md:text-4xl md:tracking-widest">Layanan Vaksinasi</h2>
                <p className="text-white font-poppins font-light text-xs tracking-wide md:mb-4">Local, experienced dog walkers you can trust.</p>
            </Hero>
            <div className="text-center bg-slate-300 py-3 flex flex-col gap-3">
                <h1 className="font-poppins font-bold text-3xl">Mengapa Vaksinasi itu penting?</h1>
                <img src="img/hero.jpeg" alt="" />
                <p className="text-justify mx-5 font-montserrat">Vaksinasi hewan sangat penting karena dapat melindungi mereka dari penyakit yang berbahaya dan dapat menyebabkan penderitaan yang serius atau bahkan kematian. Vaksin bekerja dengan merangsang sistem kekebalan tubuh untuk memproduksi perlindungan terhadap patogen penyebab penyakit.</p>
                <div className="flex items-center gap-1 py-2 bg-red w-3/4 mx-auto justify-center font-chewy text-2xl text-white px-2 rounded-md my-2">
                    <button>Jadwalkan Vaksinasasi </button>
                    <MdOutlineNavigateNext className="text-white" />
                </div>
                <div className="bg-center bg-cover bg-no-repeat py-5"
                    style={{ backgroundImage: `url("img/bg.png")` }}>
                    <h1 className="font-poppins font-bold text-3xl my-3 ">Syarat Vaksin</h1>
                    <p className="font-montserrat mx-5 text-justify">Vaksin harus diberikan pada hewan dalam keadaan: sehat, tidak demam, tidak diare, tidak flu, tidak ada masalah kulit, usia memenuhi syarat minimal, dan sudah obat cacing. Setelah pemberian vaksin dalam waktu satu minggu hewan tidak boleh mendapat perlakuan yang membuat hewan stress (grooming/perjalanan jauh) serta tidak boleh ke luar rumah terlebih dahulu yang berpotensi menghambat pertumbuhan antibodi tubuhnya dan masih bisa terpapar penyakit.</p>
                </div>
            </div>
            <Vaccine data={dataVaksinKucing} />
            <p className="font-montserrat mx-10 text-justify text-sm">* Pemberian vaksin disesuaikan dengan kondisi/umur hewan dan saran dari masing-masing dokter hewan</p>
            <div style={{ backgroundImage: `url("img/bg2.png")` }} className="bg-center bg-cover bg-no-repeat ">
                <Request />
            </div>
            <Footer />
        </>
    )
}

export default Services