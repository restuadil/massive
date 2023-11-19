import { FaMedal } from "react-icons/fa"
import { BiSolidLike } from "react-icons/bi";
import { AiOutlineFileProtect } from "react-icons/ai";
import { TiPin } from "react-icons/ti";
import Footer from "../../components/Footer/Footer"
import Gallery from "../../components/Gallerry/Gallery"
import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
import Review from "../../components/Review/Review"
import Request from "../../components/Request/Request";

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <Hero img={"img/hero.jpeg"} btnContent={"Layanan Permintaan"}>
                <h2 className="text-white text-4xl font-medium font-chewy mt-20 md:mt-0 md:text-4xl md:tracking-widest">
                    PERAWATAN FLEKSIBEL DAN TERPERCAYA UNTUK KUCING DAN ANJING ANDA
                </h2>
                <p className="text-white font-poppins font-light text-xs tracking-wide md:mb-4">Pengasuh Hewan Peliharaan yang Berpengalaman dan Penyayang Hewan</p>
            </Hero>
            <div className="mx-5 md:flex md:flex-row md:items-center">
                <img src="img/hero.jpeg" className="h-[500px] md:w-1/2  block mx-auto p-10" alt="" />
                <div>
                    <h1 className="font-poppins font-bold text-2xl text-center">Kami Menyediakan Layanan Perawatan Hewan Peliharaan Selama <span className="text-red">Bertahun-Tahun</span></h1>
                    <p className="font-montserrat mt-5 text-justify">“Di Pet Care, tujuan kami adalah membuat perawatan hewan peliharaan menjadi lebih mudah, dengan memberikan layanan yang fleksibel dan dapat diandalkan, sehingga pemilik hewan peliharaan dapat menjalankan bisnisnya, dan tidak perlu khawatir hewan peliharaannya menunggu di rumah. "</p>
                    <span className="font-montserrat font-bold mt-8 block">Founder, Pet Care</span>
                    <span className="font-montserrat font-bold">Bobby</span>
                </div>
            </div>
            <div className="bg-cover bg-no-repeat px-5 py-10 " style={{ backgroundImage: `url("img/bg.png")` }}>
                <h1 className=" font-poppins font-bold text-2xl md:text-center md:py-1">Hewa Peliharaan Anda <span className="text-red">Aman</span> Bersama Kami</h1>
                <div className="flex flex-col gap-5 mt-5 md:flex md:flex-row md:items-center">
                    <div className="flex flex-col gap-3">
                        <FaMedal className="text-red text-3xl" />
                        <h1 className="text-red font-poppins font-bold">Staf Yang Terlatih</h1>
                        <p className="font-montserrat">Staf kami sepenuhnya terlatih dalam pertolongan pertama & CPR pada anjing dan kucing</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <BiSolidLike className="text-red text-3xl" />
                        <h1 className="text-red font-poppins font-bold">Bersih-Mainan Melengking</h1>
                        <p className="font-montserrat">Kami hanya menggunakan produk pembersih teraman yang diformulasikan khusus untuk digunakan di sekitar hewan</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <AiOutlineFileProtect className="text-red text-3xl" />
                        <h1 className="text-red font-poppins font-bold">Lingkungan Aman</h1>
                        <p className="font-montserrat">Semua hewan peliharaan yang ditampung dalam keadaan sehat, telah dimandulkan, dikebiri, dan divaksinasi</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <TiPin className="text-red text-3xl" />
                        <h1 className="text-red font-poppins font-bold">Pantau Anak Anjing Anda</h1>
                        <p className="font-montserrat">Akses webcam langsung kami di ponsel dan laptop Anda</p>
                    </div>
                </div>
            </div>
            <div className="md:flex md:flex-row-reverse md:items-center">
                <div>
                    <h1 className=" font-poppins font-bold text-2xl text-center mt-3">Rumah Anda <span className="text-red">Terlindungi</span></h1>
                    <p className="font-montserrat mx-5 tracking-wide block mt-5 text-justify text-sm">Kami tahu bahwa setelah kesehatan, keselamatan, dan kebahagiaan hewan peliharaan Anda, keamanan rumah Anda adalah prioritas utama. Inilah cara kami memastikan keamanan rumah Anda saat Anda bepergian:</p>
                    <ul className="list-disc mx-10 mt-3 text-justify font-montserrat">
                        <li>Satu-satunya orang yang memiliki akses ke kunci atau kode akses Anda adalah kantor utama lokasi Anda dan pengasuh Anda
                        </li>
                        <li>Kami melacak semua pergerakan kunci, artinya jika pengasuh Anda memerlukan kunci, mereka diharuskan mengajukan permintaan di pelacakan aplikasi sistem kami
                        </li>
                        <li>Jika rumah Anda memiliki kode akses, kode tersebut hanya akan tersedia bagi pengasuh Anda selama jam layanan terjadwal`</li>
                    </ul>
                </div>
                <img src="img/hero.jpeg" className="h-[500px] block mx-auto p-10 md:w-1/2" alt="" />
            </div>
            <Review bg={"img/bg.png"} />
            <div style={{ backgroundImage: `url("img/bg2.png")` }} className="bg-center bg-cover bg-no-repeat ">
                <Request />
            </div>
            <Gallery />
            <Footer />
        </>
    )
}

export default AboutUs