import BtnHero from "../UI/BtnHero";

const Hero = ({ img, bg = "img/bg2.png", btnContent = "Dapatkan Aplikasi", children }) => {
  return (
    <>
      <div
        className="relative h-[90vh] md:h-[431px] bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <img src={`${img}`} alt="" className="rounded-b-[300px] " />
        <div className="mx-5 flex flex-col gap-5 md:pt-0 md:absolute md:inset-y-0 md:left-0 md:w-1/2 md:justify-center md:items-center md:p-10 md:mx-0">
          {children}
          <BtnHero btnContent={btnContent} />
        </div>
      </div >
    </>
  );
};

export default Hero;
