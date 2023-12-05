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
                <img src="../../../img/homevisit.png" alt="" className="w-[500px]" />
            </div>
            <div className="mx-32 font-poppins my-5">
                <h1 className="font-bold my-3">RAS ANJING KECIL</h1>
                <p>Ukuran ras anjing mungil akan menguntungkan Anda yang tak memiliki ruangan yang luas untuk memelihara anjing. Mereka juga mudah diangkut dan biaya sehari-harinya lebih hemat daripada Anda memelihara ras anjing besar. Ukuran mungil anjing juga menguntungkan diri mereka sendiri untuk beraktivitas dan bermanja di pelukan Anda.
                </p>
                <div className="flex flex-row gap-5 justify-center my-3">
                    <img src=" https://cdn.royalcanin-weshare-online.io/u_pKHWsBIYfdNSoCOxqf/v1/bd33bl-hub-bolognese-adult-standing?w=430&auto=compress " alt="" className="shadow-xl p-3 my-3 w-1/3" />
                    <img src="https://cdn.royalcanin-weshare-online.io/T_qwH2YBIYfdNSoCrgjO/v2/bd171bl-continental-toy-spaniel-adult-lying-down?w=430&auto=compress" alt="" className="shadow-xl p-3 my-3 w-1/3" />
                    <img src=" https://cdn.royalcanin-weshare-online.io/uCJ5wWoBaxEApS7LIRu_/v1/bd187bl-hub-english-toy-terrier-adult-sitting?w=430&auto=compress" alt="" className="shadow-xl p-3 my-3 w-1/3" />
                </div>
            </div>
            <div className="mx-32 font-poppins my-5">
                <h1 className="font-bold my-3">RAS ANJING SEDANG</h1>
                <p>Ukuran ras anjing mungil akan menguntungkan Anda yang tak memiliki ruangan yang luas untuk memelihara anjing. Mereka juga mudah diangkut dan biaya sehari-harinya lebih hemat daripada Anda memelihara ras anjing besar. Ukuran mungil anjing juga menguntungkan diri mereka sendiri untuk beraktivitas dan bermanja di pelukan Anda.
                </p>
                <div className="flex flex-row gap-5 justify-center my-3">
                    <img src="https://cdn.royalcanin-weshare-online.io/hfrTsmoBIYfdNSoCwxjI/v3/bd231bl-hub-japanese-terrier-adult-standing?w=430&auto=compress" alt="" className="shadow-xl p-3 my-3 w-1/3" />
                    <img src=" https://cdn.royalcanin-weshare-online.io/-mlZHWsBG95Xk-RB9fgV/v5/bd43bl-hub-bull-terrier-adult-standing?w=430&auto=compress" alt="" className="shadow-xl p-3 my-3 w-1/3" />
                    <img src="https://cdn.royalcanin-weshare-online.io/s_o5HWsBIYfdNSoC4BoK/v1/bd24bl-hub-american-cocker-spaniel-adult-standing?w=430&auto=compress" alt="" className="shadow-xl p-3 my-3 w-1/3" />
                </div>
            </div>
            <div className="mx-32 font-poppins my-5">
                <h1 className="font-bold my-3">RAS ANJING BESAR</h1>
                <p>Ukuran ras anjing mungil akan menguntungkan Anda yang tak memiliki ruangan yang luas untuk memelihara anjing. Mereka juga mudah diangkut dan biaya sehari-harinya lebih hemat daripada Anda memelihara ras anjing besar. Ukuran mungil anjing juga menguntungkan diri mereka sendiri untuk beraktivitas dan bermanja di pelukan Anda.
                </p>
                <div className="flex flex-row gap-5 justify-center my-3">
                    <img src="https://cdn.royalcanin-weshare-online.io/2CIqxWoBaxEApS7L9hvQ/v1/bd170bl-hub-clumber-spaniel-adult-standing?w=430&auto=compress" alt="" className="shadow-xl p-3 my-3 w-1/3" />
                    <img src="https://cdn.royalcanin-weshare-online.io/rvo0HWsBIYfdNSoCfxpx/v1/bd22bl-hub-akita-adult-standing?w=430&auto=compress" alt="" className="shadow-xl p-3 my-3 w-1/3" />
                    <img src="https://cdn.royalcanin-weshare-online.io/qPotHWsBIYfdNSoCPRp3/v1/bd18bl-hub-bernese-mountain-dog-adult-standing?w=430&auto=compress" alt="" className="shadow-xl p-3 my-3 w-1/3" />
                </div>
            </div>
            <Request bg={"../../img/bg2.png"} />
            <Footer logo="../../img/logo.png" bg={`url("../../img/bg.png")`} />
        </>
    )
}

export default JenisAnjing