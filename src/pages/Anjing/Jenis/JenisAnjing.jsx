import Navbar from "../../../components/Navbar/Navbar"
import Request from "../../../components/Request/Request"
import Footer from "../../../components/Footer/Footer"


const JenisAnjing = () => {
    return (
        <>
            <Navbar logo="../../img/logo.png" />

            <div className="my-10 flex flex-row justify-between items-center mx-32 gap-5">
                <div className="flex flex-col gap-3 font-poppins">
                    <h1 className=" text-5xl text-left text-[#FF6C22]">apa saja jenis ras anjing yang ada ?</h1>
                    <h2 className=" text-2xl text-left">Ras yang berbeda. <span className="text-red">Kebutuhan yang berbeda</span></h2>
                    <p>Ada banyak ukuran, bentuk, dan kepribadian anjing. Begitu juga kebutuhan kesehatannya. Kami telah membuat formula khusus untuk mendukung masing-masing kebutuhan unik tersebut.</p>
                </div>
                <img src="../../../public/img/homevisit.png" alt="" className="w-[500px]" />
            </div>
            <div className="mx-32 font-poppins my-5">
                <h1 className="font-bold my-3">RAS ANJING KECIL</h1>
                <p>Ukuran ras anjing mungil akan menguntungkan Anda yang tak memiliki ruangan yang luas untuk memelihara anjing. Mereka juga mudah diangkut dan biaya sehari-harinya lebih hemat daripada Anda memelihara ras anjing besar. Ukuran mungil anjing juga menguntungkan diri mereka sendiri untuk beraktivitas dan bermanja di pelukan Anda.
                </p>
                <div className="flex flex-row gap-5 justify-center my-3">
                    <img src="../../../public/img/jenisanjing1.png" alt="" className="shadow-xl p-3 my-3" />
                    <img src="../../../public/img/jenisanjing2.png" alt="" className="shadow-xl p-3 my-3" />
                    <img src="../../../public/img/jenisanjing3.png" alt="" className="shadow-xl p-3 my-3" />
                </div>
            </div>
            <div className="mx-32 font-poppins my-5">
                <h1 className="font-bold my-3">RAS ANJING SEDANG</h1>
                <p>Ukuran ras anjing mungil akan menguntungkan Anda yang tak memiliki ruangan yang luas untuk memelihara anjing. Mereka juga mudah diangkut dan biaya sehari-harinya lebih hemat daripada Anda memelihara ras anjing besar. Ukuran mungil anjing juga menguntungkan diri mereka sendiri untuk beraktivitas dan bermanja di pelukan Anda.
                </p>
                <div className="flex flex-row gap-5 justify-center my-3">
                    <img src="../../../public/img/jenisanjing1.png" alt="" className="shadow-xl p-3 my-3" />
                    <img src="../../../public/img/jenisanjing2.png" alt="" className="shadow-xl p-3 my-3" />
                    <img src="../../../public/img/jenisanjing3.png" alt="" className="shadow-xl p-3 my-3" />
                </div>
            </div>
            <div className="mx-32 font-poppins my-5">
                <h1 className="font-bold my-3">RAS ANJING BESAR</h1>
                <p>Ukuran ras anjing mungil akan menguntungkan Anda yang tak memiliki ruangan yang luas untuk memelihara anjing. Mereka juga mudah diangkut dan biaya sehari-harinya lebih hemat daripada Anda memelihara ras anjing besar. Ukuran mungil anjing juga menguntungkan diri mereka sendiri untuk beraktivitas dan bermanja di pelukan Anda.
                </p>
                <div className="flex flex-row gap-5 justify-center my-3">
                    <img src="../../../public/img/jenisanjing1.png" alt="" className="shadow-xl p-3 my-3" />
                    <img src="../../../public/img/jenisanjing2.png" alt="" className="shadow-xl p-3 my-3" />
                    <img src="../../../public/img/jenisanjing3.png" alt="" className="shadow-xl p-3 my-3" />
                </div>
            </div>
            <Request bg={"../../img/bg2.png"} />
            <Footer logo="../../img/logo.png" bg={`url("../../img/bg.png")`} />
        </>
    )
}

export default JenisAnjing