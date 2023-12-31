/* eslint-disable react/prop-types */
import BtnHero from "../UI/BtnHero";

const Hero = ({ img, bg = "img/bg2.png", btnContent, children }) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="relative max-h-max pb-10 md:h-[431px] bg-center bg-cover bg-no-repeat md:flex md:flex-row-reverse items-center justify-between"
      >
        <img
          src={`${img}`}
          alt=""
          className="rounded-b-[300px] md:rounded-none md:w-1/2 md:h-full "
        />
        <div className="mx-5 flex flex-col gap-5 md:pt-0  md:p-10 md:mx-0">
          {children}
          {btnContent ? <BtnHero btnContent={btnContent} /> : null}
        </div>
      </div>
    </>
  );
};

export default Hero;
