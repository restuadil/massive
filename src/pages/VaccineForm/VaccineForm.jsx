import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Request from "../../components/Request/Request";
import BtnHero from "../../components/UI/BtnHero";

const VaccineForm = () => {
  return (
    <>
      <Navbar logo="../../img/logo.png" />
      <div className="my-5 text-white mx-32">
        <h1 className="text-center font-bold text-3xl my-3 text-black">
          Form Vaksinasi Hewan
        </h1>
        <div className="bg-slate-600 p-10 rounded-md mx-52 ">
          <div className=" mt-3">
            <label htmlFor="name" className="font-bold font-poppins text-xl ">
              Nama Pemilik Hewan
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full pl-5 rounded-md bg-slate-50  shadow-slate-500 py-3 mt-3"
              placeholder="Masukkan Nama Pemilik Hewan"
            />
          </div>
          <div className=" mt-3">
            <label htmlFor="email" className="font-bold font-poppins text-xl ">
              Alamat E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full pl-5 rounded-md bg-slate-50  shadow-slate-500 py-3 mt-3"
              placeholder="Masukkan Alamat E-mail"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="font-bold font-poppins text-xl ">
              Alamat Lengkap
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full pl-5 rounded-md bg-slate-50  shadow-slate-500 py-10 mt-3"
              placeholder="Masukkan Alamat Lengkap"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="name" className="font-bold font-poppins text-xl ">
              Nomor Telepon
            </label>
            <input
              type="tel"
              name=""
              id=""
              className="w-full pl-5 rounded-md bg-slate-50  shadow-slate-500 py-3 mt-3"
              placeholder="Masukkan Nomor Telepon"
            />
          </div>
          <div className="flex flex-row ">
            <hr className="h-1 bg-black mt-5" />
            <div className="flex flex-col w-[50%] font-bold font-poppins text-xl mt-3 gap-2 ">
              <label htmlFor="jns" className="text-left">
                Jenis hewan
              </label>
              <select name="" id="" className="py-3 text-black rounded-md">
                <option value="">Kucing</option>
                <option value="">Kucing</option>
              </select>
            </div>
            <div className="flex flex-col w-[50%] items-center font-bold font-poppins text-xl mt-3 gap-2 text-white">
              <label htmlFor="jns">Tanggal Lahir Hewan</label>
              <input
                type="date"
                name=""
                id=""
                className="py-3 px-5 text-black rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col w-[50%]  font-bold font-poppins text-xl mt-3 gap-2 ">
            <label htmlFor="jns" className="text-left">
              Jenis Kelamin Hewan
            </label>
            <select name="" id="" className="py-3 text-black rounded-md">
              <option value="">Kucing</option>
              <option value="">Kucing</option>
            </select>
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="name" className="font-bold font-poppins text-xl ">
              Ras Hewan
            </label>
            <input
              type="tel"
              name=""
              id=""
              className="w-full pl-5 rounded-md bg-slate-50  shadow-slate-500 py-3 mt-3"
              placeholder="Masukkan Ras Hewan"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="name" className="font-bold font-poppins text-xl ">
              Tanda Khusus Pada Hewan
            </label>
            <input
              type="tel"
              name=""
              id=""
              className="w-full pl-5 rounded-md bg-slate-50  shadow-slate-500 py-3 mt-3"
              placeholder="Masukkan Tanda Khusus Pada Hewan"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="name" className="font-bold font-poppins text-xl ">
              Warna Hewan
            </label>
            <input
              type="tel"
              name=""
              id=""
              className="w-full pl-5 rounded-md bg-slate-50  shadow-slate-500 py-3 mt-3"
              placeholder="Masukkan Warna Hewan"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="name" className="font-bold font-poppins text-xl ">
              Riwayat vaksinasi sebelumnya (optional)
            </label>
            <input
              type="tel"
              name=""
              id=""
              className="w-full pl-5 rounded-md bg-slate-50  shadow-slate-500 py-3 mt-3"
              placeholder="Masukkan Riwayat vaksinasi sebelumnya"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="name" className="font-bold font-poppins text-xl ">
              Riwayat penyakit yang pernah/sedang diderita (jika ada)
            </label>
            <input
              type="tel"
              name=""
              id=""
              className="w-full pl-5 rounded-md bg-slate-50  shadow-slate-500 py-3 mt-3"
              placeholder="Masukkan Riwayat penyakit yang pernah/sedang diderita"
            />
          </div>
          <div className="flex flex-row ">
            <hr className="h-1 bg-black mt-5" />
            <div className="flex flex-col w-[50%] font-bold font-poppins text-xl mt-3 gap-2 ">
              <label htmlFor="jns" className="text-left">
                Jenis Vaksin
              </label>
              <select name="" id="" className="py-3 rounded-md px-3 text-black">
                <option value="">F3 + Rabies</option>
                <option value="">F4 + Rabies</option>
              </select>
            </div>
            <div className="flex flex-col w-[50%] items-center font-bold font-poppins text-xl mt-3 gap-2 ">
              <label htmlFor="jns">Tanggal Lahir Hewan</label>
              <input
                type="date"
                name=""
                id=""
                className="py-3 px-5 text-black rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="name" className="font-bold font-poppins text-xl ">
              Tambahan (alergi terhadap vaksin tertentu)
            </label>
            <input
              type="tel"
              name=""
              id=""
              className="w-full pl-5 rounded-md bg-slate-50  shadow-slate-500 py-3 mt-3"
              placeholder="Masukkan Tambahan (alergi terhadap vaksin tertentu)"
            />
          </div>
          <div className="mt-5 text-3xl ">
            <BtnHero btnContent={"Pesan"} />
          </div>
        </div>
      </div>
      <Request bg={"../../img/bg2.png"} />
      <Footer logo="../../img/logo.png" bg={`url("../../img/bg.png")`} />
    </>
  );
};

export default VaccineForm;
