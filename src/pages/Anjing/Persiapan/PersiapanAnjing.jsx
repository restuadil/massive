import Navbar from "../../../components/Navbar/Navbar"
import Request from "../../../components/Request/Request"
import Footer from "../../../components/Footer/Footer"


const PersiapanAnjing = () => {

    return (
        <>
            <Navbar logo="../../img/logo.png" />

            <div className="my-10 flex flex-row justify-between items-center mx-32 gap-5">
                <img src="../../../img/homevisit.png" alt="" className="w-[500px]" />
                <div className="flex flex-col gap-3 font-poppins">
                    <h1 className=" text-5xl text-left font-bold  text-[#FF6C22]">Hal apa saja yang perlu kita siapkan untuk memelihara anjing</h1>
                </div>
            </div>
            <div className="my-10 flex flex-row justify-between items-center mx-32 gap-5 ">
                <p className="bg-slate-100 p-3 rounded-md w-[500px] text-lg font-montserrat">Anjing merupakan hewan peliharaan yang lucu dan memiliki tingkah laku menggemaskan. Apalagi, saat kita memelihara anjing, ada berbagai dampak positif buat kesehatan, seperti mengurangi risiko terkena serangan jantung dan meningkatkan kualitas tidur. Meskipun demikian, kita tidak bisa menjadikan hal tersebut sebagai alasan dalam memelihara anjing di rumah. Soalnya, merawat hewan tidak sekadar mendapatkan teman bermain saja, tetapi kita harus memenuhi semua kebutuhannya.
                </p>
                <img src="../../img/dog1.jpeg" alt="" className="w-[500px]" />
            </div>
            <div className="mx-28">
                <h1 className="text-3xl text-center font-poppins font-bold">HAL  YANG PERLU DISIAPKAN UNTUK MENYAMBUT <span className="text-red">ANJING KESAYANGAN</span> ANDA</h1>
                <div className="font-poppins my-5 mx-16">
                    <div>
                        <h1 className="text-xl text-[#FF6C22] my-4">1. Ketahui terlebih dahulu tanggung jawabnya</h1>
                        <div className="ml-5">
                            <p>Saat memelihara anjing, kamu harus mengetahui bahwa tanggung jawabnya cukup besar. Apalagi, anjing bisa hidup hingga usia 10-15 tahun ke depan.
                                <br />
                                <br />
                                Jadi, kamu harus berkomitmen setidaknya belasan tahun dalam memelihara, mulai dari membeli makanan,membersihkan kandang, mengajaknya bermain, hingga mengajaknya ke dokter kalau mereka sakit.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl text-[#FF6C22] my-4">2. Pilih jenis Anjing secara bijak</h1>
                        <div className="ml-5">
                            <p>Perhatikan juga jenis anjing yang ingin kamu pelihara. Soalnya, setiap ras anjing memiliki sifat yang berbeda-beda. Misalnya, kamu harus mempetimbangkan apakah ingin memelihara anjing untuk menemani olahraga atau buat jadi teman saja.
                                <br />
                                <br />
                                Jika ingin berolahraga dengan anjing, pilih yang jenisnya Siberian Husky. Akan tetapi, buat kamu yang sering bersantai di rumah dan ingin ditemani anjing, maka pilih jenis Shih Tzu.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl text-[#FF6C22] my-4">3. Pertimbangkan tempat membeli Anjing</h1>
                        <div className="ml-5">
                            <p>Ketika ingin memelihara anjing, kamu memiliki dua pilihan untuk mendapatkannya, yaitu membeli dari peternak atau mengadopsinya dari tempat penampungan hewan. Jika ingin membeli, ada berbagai situs online atau pet shop yang dapat kamu kunjungi.
                                <br />
                                <br />
                                Sedangkan buat kamu yang ingin mengadopsi, sebaiknya mengunjungi tempat penampungan hewan tertentu. Namun, jenis anjing yang ada di tempat penampungan memang lebih terbatas.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl text-[#FF6C22] my-4">4. Siapkan waktu adaptasi</h1>
                        <div className="ml-5">
                            <p>Jika sudah berhasil memilih anjing yang tepat, kamu juga perlu mempersiapkan tempat buat mereka beradaptasi di rumah. Sebelum membawanya ke rumah, pastikan kalau kamu sudah melakukan pengecekan kesehatan untuk mengurangi risiko penyebaran virus.
                                <br />
                                <br />
                                Ketika anjing sudah sampai rumah, kamu harus memberinya waktu untuk beradaptasi dengan mengajaknya berinteraksi dan biarkan mereka menjelajahi isi rumah
                                <br />
                                <br />
                                Hindari mengajak anjing untuk langsung bertemu banyak orang sebelum mereka terbiasa dengan suasana baru ini.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Request bg={"../../img/bg2.png"} />
            <Footer logo="../../img/logo.png" bg={`url("../../img/bg.png")`} />
        </>
    )
}

export default PersiapanAnjing