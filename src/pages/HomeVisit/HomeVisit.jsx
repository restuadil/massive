import { nanoid } from "nanoid";
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import Request from "../../components/Request/Request"
import { doctor } from "../../Utils/dataDoctor";
import { FcHome } from "react-icons/fc";
import Payment from "../../components/Payment/Payment";

const HomeVisit = () => {
    const data = [
        {
            name: "Steril",
            price: "Tidak Melayani",
        },
        {
            name: "Flushing Urine",
            price: "150.000"
        }
    ]
    return (
        <>
            <Navbar logo="../../img/logo.png" />
            <div className="mt-10">
                <h1 className="font-chewy text-5xl text-center text-slate-700">Dokter Hewan Kerumah</h1>
                <p className="font-montserrat mt-5 mx-32">Petcare hadir untuk menyediakan dokter hewan yang akan membantu dan menjadi solusi dengan menyediakan layanan kesehatan dan perawatan hewan kesayangan maupun ternak bagi para pencinta hewan serta layanan kesehatan online pertama bagi hewan peliharaan dan ternak di Indonesia. Petcare menyediakan berbagai layanan dokter hewan yang profesional dan berpengalaman bertahun-tahun di bidangnya dan sudah tersebar di seluruh pulau Jawa dan Bali. Saat ini kami memiliki layanan perawatan hewan, dan vaksinisasi untuk hewan kesayangan dan juga hewan ternak anda. Seluruh pelayanan tersebut bisa langsung didapatkan di rumah atau lokasi anda hanya dengan panggil dokter hewan dengan cepat dan mudah.
                    <br />
                    <br />
                    Untuk melihat wilayah cakupan yang kami layani dan metode pembayaran yang tersedia, silahkan klik di sini.</p>
            </div>
            <img src="../../img/homevisit.png" className="block mx-auto mt-5" alt="" />
            <h1 className="font-chewy text-4xl my-5 ml-10 text-slate-700">Mengapa Pesan di HealtdsyPet?</h1>
            <div className="flex flex-row items-center justify-between mx-10">
                <div className="w-56 h-64 bg-slate-200 rounded-md shadow-slate-600 flex flex-col justify-center p-3">
                    <FcHome className="mx-auto text-7xl" />
                    <span className="font-montserrat font-bold text-xl text-center">
                        Perawatan hewan berpengalaman dan terpercaya
                    </span>
                </div>
                <div className="w-56 h-60 bg-slate-200 rounded-md shadow-slate-600 flex flex-col justify-center p-3">
                    <FcHome className="mx-auto text-7xl" />
                    <span className="font-montserrat font-bold text-xl text-center">
                        layanan dokter hewan cepat dan mudah dari rumah
                    </span>
                </div>
                <div className="w-56 h-60 bg-slate-200 rounded-md shadow-slate-600 flex flex-col justify-center p-3">
                    <FcHome className="mx-auto text-7xl" />
                    <span className="font-montserrat font-bold text-xl text-center">
                        Dokter hewan memberikan kenyamanan pada hewan kesayangan
                    </span>
                </div>
                <div className="w-56 h-60 bg-slate-200 rounded-md shadow-slate-600 flex flex-col justify-center p-3">
                    <FcHome className="mx-auto text-7xl" />
                    <span className="font-montserrat font-bold text-xl text-center">
                        pesan dan pembayaran layanan dokter hewan dengan murah
                    </span>
                </div>
            </div>
            <h1 className="font-chewy text-5xl ml-10 text-slate-700 my-5">Partner</h1>
            <div className="flex flex-row items-center justify-between mx-10 my-5  overflow-x-auto gap-3">
                {
                    doctor.map((doctor) => {
                        return (
                            <div className="bg-[#FF6C22] rounded-md shadow-slate-600 flex flex-col justify-center py-2 px-7 " key={nanoid()}>
                                <img src={"../../" + doctor.img} alt="" />
                                <h1 className="font-montserrat font-bold text-xl text-center">{doctor.name}</h1>
                                <p className="text-center ">{doctor.specialist}</p>
                                <div className="flex flex-row gap-2 justify-center">
                                    <span>{doctor.star}</span>
                                    <span>{doctor.exp}</span>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
            <div className="mx-36 bg-slate-100 p-8 rounded-lg">
                <h1 className="text-2xl font-bold mb-4">Tarif Dasar Layanan Dokter Hewan ke Rumah</h1>
                <table className="w-full border">
                    <tbody>
                        <tr className="">
                            <td className="border p-2">Layanan</td>
                            <td className="border p-2">Hewan Kesayangan</td>
                        </tr>
                        <tr>
                            <td className="border p-2">Basic Fee</td>
                            <td className="border p-2">Rp. 100.000</td>
                        </tr>
                        <tr>
                            <td className="border p-2">Distance fee</td>
                            <td className="border p-2">5 Km = Free >5 Km = Rp 10,000 / Km Batas maksimal = Rp.150,000</td>
                        </tr>
                        <tr>
                            <td className="border p-2">Basic Fee</td>
                            <td className="border p-2">Rp 15,000</td>
                        </tr>
                        <tr>
                            <td className="border p-2">Medication fee (obat oral)</td>
                            <td className="border p-2">Tergantung obat yang diberikan</td>
                        </tr>
                        <tr>
                            <td className="border p-2">Procedure fee</td>
                            <td className="border p-2">Tergantung prosedur yang dilakukan</td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-5">
                    <p className="tracking-wider"><span className="font-bold text-2xl mr-1 ">*</span>Basic fee merupakan biaya visit dan medical check up</p>
                    <br />
                    <p className="tracking-wider"><span className="font-bold text-2xl mr-1">*</span>Apabila klien melakukan pembatalan biaya ketika drh sudah berada di jalan, maka klien tetap harus membayar biaya pembatalan sebesar 50% dari estimasi harga awal.</p>
                </div>
            </div>
            <div className="mx-36 bg-slate-100 p-8 rounded-lg mt-10">
                <h1 className="text-2xl font-bold mb-4">Tarif Tindakan Medis Dokter Hewan</h1>
                <table className="w-full border">
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr key={nanoid()}>
                                    <td className="border p-2">{item.name}</td>
                                    <td className="border p-2">{item.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="mt-5">
                    <p className="tracking-wider"><span className="font-bold text-2xl mr-1 ">*</span>Basic fee merupakan biaya visit dan medical check up</p>
                    <br />
                    <p className="tracking-wider"><span className="font-bold text-2xl mr-1">*</span>Apabila klien melakukan pembatalan biaya ketika drh sudah berada di jalan, maka klien tetap harus membayar biaya pembatalan sebesar 50% dari estimasi harga awal.</p>
                </div>
            </div>
            <Payment />

            <Request bg={"../../img/bg2.png"} />
            <Footer logo="../../img/logo.png" bg={`url("../../img/bg.png")`} />
        </>
    )
}

export default HomeVisit