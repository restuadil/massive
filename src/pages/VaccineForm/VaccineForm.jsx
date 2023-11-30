import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import Request from "../../components/Request/Request"
import BtnHero from "../../components/UI/BtnHero"

const VaccineForm = () => {
    return (
        <>
            <Navbar />
            <div className="my-5">
                <h1 className="text-center font-bold text-3xl my-3">Form Vaksinasi Hewan</h1>
                <div className="bg-[#FAF8F8] p-10 rounded-md mx-52 ">
                    <div className=" mt-3">
                        <label htmlFor="name" className="font-bold font-poppins text-xl ">Nama Pemilik Hewan</label>
                        <input type="text" name="name" id="name" className="w-full rounded-md bg-slate-50 shadow-md shadow-slate-500 py-3 mt-3" />
                    </div>
                    <div className=" mt-3" >
                        <label htmlFor="email" className="font-bold font-poppins text-xl ">Alamat E-mail</label>
                        <input type="email" name="email" id="email" className="w-full rounded-md bg-slate-50 shadow-md shadow-slate-500 py-3 mt-3" />
                    </div>
                    <div className="mt-3" >
                        <label htmlFor="name" className="font-bold font-poppins text-xl ">Alamat Lengkap</label>
                        <input type="text" name="name" id="name" className="w-full rounded-md bg-slate-50 shadow-md shadow-slate-500 py-10 mt-3" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <label htmlFor="name" className="font-bold font-poppins text-xl ">Nomor Telepon</label>
                        <input type="tel" name="" id="" className="w-full rounded-md bg-slate-50 shadow-md shadow-slate-500 py-3 mt-3" />
                    </div>
                    <div className="flex flex-row ">
                        <hr className="h-1 bg-black mt-5" />
                        <div className="flex flex-col w-[50%] font-bold font-poppins text-xl mt-3 gap-2 ">
                            <label htmlFor="jns" className="text-left">Jenis hewan</label>
                            <select name="" id="" className="py-3">
                                <option value="">Kucing</option>
                                <option value="">Kucing</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-[50%] items-center font-bold font-poppins text-xl mt-3 gap-2 ">
                            <label htmlFor="jns">Tanggal Lahir Hewan</label>
                            <input type="date" name="" id="" className="py-3 px-5" />
                        </div>
                    </div>
                    <div className="flex flex-col w-[50%]  font-bold font-poppins text-xl mt-3 gap-2 ">
                        <label htmlFor="jns" className="text-left">Jenis Kelamin Hewan</label>
                        <select name="" id="" className="py-3 rounded-md px-3">
                            <option value="">Kucing</option>
                            <option value="">Kucing</option>
                        </select>
                    </div>
                    <div className="flex flex-col mt-3">
                        <label htmlFor="name" className="font-bold font-poppins text-xl ">Ras Hewan</label>
                        <input type="tel" name="" id="" className="w-full rounded-md bg-slate-50 shadow-md shadow-slate-500 py-3 mt-3" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <label htmlFor="name" className="font-bold font-poppins text-xl ">Tanda Khusus Pada Hewan</label>
                        <input type="tel" name="" id="" className="w-full rounded-md bg-slate-50 shadow-md shadow-slate-500 py-3 mt-3" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <label htmlFor="name" className="font-bold font-poppins text-xl ">Warna Hewan</label>
                        <input type="tel" name="" id="" className="w-full rounded-md bg-slate-50 shadow-md shadow-slate-500 py-3 mt-3" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <label htmlFor="name" className="font-bold font-poppins text-xl ">Riwayat vaksinasi sebelumnya (optional)</label>
                        <input type="tel" name="" id="" className="w-full rounded-md bg-slate-50 shadow-md shadow-slate-500 py-3 mt-3" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <label htmlFor="name" className="font-bold font-poppins text-xl ">Riwayat penyakit yang pernah/sedang diderita (jika ada)</label>
                        <input type="tel" name="" id="" className="w-full rounded-md bg-slate-50 shadow-md shadow-slate-500 py-3 mt-3" />
                    </div>
                    <div className="flex flex-row ">
                        <hr className="h-1 bg-black mt-5" />
                        <div className="flex flex-col w-[50%] font-bold font-poppins text-xl mt-3 gap-2 ">
                            <label htmlFor="jns" className="text-left">Jenis Vaksin</label>
                            <select name="" id="" className="py-3 rounded-md px-3">
                                <option value="">F3 + Rabies</option>
                                <option value="">F4 + Rabies</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-[50%] items-center font-bold font-poppins text-xl mt-3 gap-2 ">
                            <label htmlFor="jns">Tanggal Lahir Hewan</label>
                            <input type="date" name="" id="" className="py-3 px-5" />
                        </div>
                    </div>
                    <div className="flex flex-col mt-3">
                        <label htmlFor="name" className="font-bold font-poppins text-xl ">Tambahan (alergi terhadap vaksin tertentu)</label>
                        <input type="tel" name="" id="" className="w-full rounded-md bg-slate-50 shadow-md shadow-slate-500 py-3 mt-3" />
                    </div>
                    <div className="mt-5">
                        <BtnHero btnContent={"Pesan"} />
                    </div>
                </div>
            </div>
            <Request bg={"/img/bg2.png"} />
            <Footer />
        </>
    )
}

export default VaccineForm