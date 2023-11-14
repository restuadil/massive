const Hero = () => {
  return (
    <>
      <div
        className="relative h-[100vh] md:h-[431px] bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url("img/hero.png")` }}
      >
        <div className="pt-28 mx-5 flex flex-col gap-5 md:pt-0 md:absolute md:inset-y-0 md:left-0 md:w-1/2 md:justify-center md:items-center md:p-10 md:mx-0">
          <h2 className="text-white text-3xl font-medium font-chewy mt-20 md:mt-0 md:text-4xl md:tracking-widest">Lakukan yang <span className="text-red">TERBAIK</span> Untuk Hewan Peliharaan Anda</h2>
          <p className="text-white font-poppins font-light text-xs tracking-wide md:mb-4"> Memberikan keahlian perawatan hewan peliharaan di Allston, Brighton, Brookline, Chestnut Hill, Fenway, Kenmore, Newton Corner, MA</p>
          <button className="text-white bg-red py-2 px-6 rounded-3xl shadow-md shadow-slate-500 w-56 md:-ml-64">
            <div className="flex gap-2 items-center justify-center">
              <img src="img/pow.png" alt="" />
              <p>Dapatkan Aplikasi</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
