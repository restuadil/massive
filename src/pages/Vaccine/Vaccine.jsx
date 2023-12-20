/* eslint-disable react/prop-types */
import { dataVaksinKucing } from "../../Utils/dataVaksinKucing";
import { nanoid } from "nanoid";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import Request from "../../components/Request/Request";
import Gallery from "../../components/Gallerry/Gallery";
import Footer from "../../components/Footer/Footer";
import BtnHero from "../../components/UI/BtnHero";
const Vaccine = () => {
  return (
    <>
      <Navbar />
      <Hero img={"img/hero.jpeg"} btnContent={"Daftarkan Sekarang"}>
        <h2 className="text-white text-4xl font-medium font-chewy mt-20 md:mt-0 md:text-4xl md:tracking-widest">
          Layanan Vaksinasi
        </h2>
        <p className="text-white font-poppins font-light text-xs tracking-wide md:mb-4">
          Local, experienced dog walkers you can trust
        </p>
      </Hero>
      <div className="mx-36">
        <h2 className="text-center font-bold font-poppins text-3xl py-8">
          Mengapa Vaksinasi itu penting?
        </h2>
        <div className="flex flex-row justify-around items-center gap-8  bg-slate-100 pr-2 rounded-md">
          <img src="img/vaksin.png" alt="" />
          <div className="flex flex-col justify-between gap-10">
            <p className="font-montserrat tracking-widest">
              Vaksinasi hewan sangat penting karena dapat melindungi mereka dari
              penyakit yang berbahaya dan dapat menyebabkan penderitaan yang
              serius atau bahkan kematian. Vaksin bekerja dengan merangsang
              sistem kekebalan tubuh untuk memproduksi perlindungan terhadap
              patogen penyebab penyakit.
            </p>
            <BtnHero btnContent={"Jadwalkan Vaksinasi"} />
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url("img/bg.png")` }}
        className=" py-10 my-10"
      >
        <div className="mx-36">
          <h2 className="text-center font-bold font-poppins text-3xl">
            Syarat Vaksin
          </h2>
          <p className="text-center font-montserrat">
            Vaksin harus diberikan pada hewan dalam keadaan: sehat, tidak demam,
            tidak diare, tidak flu, tidak ada masalah kulit, usia memenuhi
            syarat minimal, dan sudah obat cacing. Setelah pemberian vaksin
            dalam waktu satu minggu hewan tidak boleh mendapat perlakuan yang
            membuat hewan stress (grooming/perjalanan jauh) serta tidak boleh ke
            luar rumah terlebih dahulu yang berpotensi menghambat pertumbuhan
            antibodi tubuhnya dan masih bisa terpapar penyakit.
          </p>
        </div>
      </div>
      <div className="hidden md:block py-3">
        <h2 className="font-bold font-poppins text-center text-3xl my-10">
          Dosis Vaksin Kucing
        </h2>
        <div className="flex flex-row justify-center items-center gap-3 mt-3">
          {dataVaksinKucing.map((data) => (
            <div key={nanoid()} className="bg-primary p-5 rounded-md">
              <h1 className="font-bold font-poppins text-center">
                {data.range}
              </h1>
              <ul className="text-left list-disc ml-3">
                <li>{data.vaksin[0]}</li>
                <li>{data.vaksin[1]}</li>
                <li>{data.vaksin[2]}</li>
              </ul>
              <span className="text-left">{data.title}</span>
            </div>
          ))}
        </div>
        <p className="font-montserrat mx-10 text-justify text-sm md:mt-3 md:mr-7">
          * Pemberian vaksin disesuaikan dengan kondisi/umur hewan dan saran
          dari masing-masing dokter hewan
        </p>
      </div>
      <div className="hidden md:block py-3">
        <h2 className="font-bold font-poppins text-center text-3xl my-10">
          Dosis Vaksin Anjing
        </h2>
        <div className="flex flex-row justify-center items-center gap-3 mt-3">
          {dataVaksinKucing.map((data) => (
            <div key={nanoid()} className="bg-primary p-5 rounded-md">
              <h1 className="font-bold font-poppins text-center">
                {data.range}
              </h1>
              <ul className="text-left list-disc ml-3">
                <li>{data.vaksin[0]}</li>
                <li>{data.vaksin[1]}</li>
                <li>{data.vaksin[2]}</li>
              </ul>
              <span className="text-left">{data.title}</span>
            </div>
          ))}
        </div>
        <p className="font-montserrat mx-10 text-justify text-sm md:mt-3 md:mr-7">
          * Pemberian vaksin disesuaikan dengan kondisi/umur hewan dan saran
          dari masing-masing dokter hewan
        </p>
      </div>
      <Review bg={"img/bg.png"} />
      <Request bg={"img/bg2.png"} />
      <Gallery />
      <Footer />
    </>
  );
};

export default Vaccine;
