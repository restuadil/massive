import Hero from "../../components/Hero/Hero"
import Layanan from "../../components/Layanan/Layanan"
import Navbar from "../../components/Navbar/Navbar"
import { dataAbout } from "../../Utils/dataAbout"
import { GrFormPrevious, GrFormNext } from "react-icons/gr"
import { useState } from "react"
import Review from "../../components/Review/Review"
import { nanoid } from "nanoid"
import Gallery from "../../components/Gallerry/Gallery"
import Request from "../../components/Request/Request"
import Footer from "../../components/Footer/Footer"


const Home = () => {
    const [data, setData] = useState(0)

    const handlePrev = () => {
        setData(data - 1)
    }
    const handleNext = () => {
        setData(data + 1)
    }

    return (
        <>
            <Navbar />
            <Hero btnContent={"Dapatkan Aplikasi"} img={"img/hero.jpeg"} >
                <h2 className="text-white text-4xl font-medium font-chewy mt-20 md:mt-0 md:text-4xl md:tracking-widest">Lakukan yang <span className="text-red">TERBAIK</span> Untuk Hewan Peliharaan Anda</h2>
                <p className="text-white font-poppins font-light text-xs tracking-wide md:mb-4"> Memberikan keahlian perawatan hewan peliharaan di Allston, Brighton, Brookline, Chestnut Hill, Fenway, Kenmore, Newton Corner, MA</p>
            </Hero>
            <Layanan />
            <div className="bg-center bg-cover bg-no-repeat h-[400px]"
                style={{ backgroundImage: `url("img/bg.png")` }}>
                <h1 className="text-center font-bold font-poppins text-3xl pt-20">Our numbers tell more about us</h1>
                <div className="relative flex flex-col items-center justify-center gap-4 mt-4 md:hidden">
                    {data > 0 ?
                        <button className="absolute left-10 top-6  p-3 rounded-full shadow-slate-500 shadow-2xl text-3xl" onClick={handlePrev}>
                            <GrFormPrevious />
                        </button> : ""
                    }
                    <span className="bg-white text-center font-bold font-poppins text-5xl text-red px-5 py-7 rounded-full ">{dataAbout[data].title}</span>
                    {
                        data < dataAbout.length - 1 ?
                            <button className="absolute right-10 top-6  p-3 rounded-full shadow-slate-500 shadow-2xl text-3xl"
                                onClick={handleNext}>
                                <GrFormNext />
                            </button> : ""
                    }
                    <p className="font-montserrat font-bold">{dataAbout[data].description}</p>
                </div>
                <div className="flex-row justify-between hidden md:flex mx-24">
                    {
                        dataAbout.map((data) => (
                            <div className="flex justify-between items-center mx-20 mt-20" key={nanoid()}>
                                <div className="flex flex-col text-center font-medium font-chewy">
                                    <h1 className="text-7xl">{data.title}</h1>
                                    <p className="font-bold font-montserrat">{data.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Review />
                <Gallery bg={"img/bg.png"} />
            <div style={{ backgroundImage: `url("img/bg2.png")` }} className="bg-center bg-cover bg-no-repeat ">
                <Request />
            </div>
            <Footer />
        </>
    )
}

export default Home