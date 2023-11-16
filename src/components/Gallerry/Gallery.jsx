import { HiArrowNarrowRight } from "react-icons/hi"

const Gallery = ({ bg }) => {
    return (
        <>
            <div className="py-10 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>
                <div className="relative ">
                    <h1 className="text-3xl text-center font-poppins font-bold  px-2 ">
                        Lihat Moment <span className="text-red">Bahagia</span> Kami
                    </h1>
                    <img src="img/dog1.jpeg" alt="dog" className="px-7 mt-2 mx-auto block rounded-sm" />
                    <button className="absolute top-1/2 right-2 z-10 p-2 rounded-full bg-primary text-3xl cursor-pointer active:scale-105 active:text-white">
                        <HiArrowNarrowRight />
                    </button>
                </div>
                <button className="text-3xl font-chewy bg-white block mx-auto px-7 py-1 rounded-2xl mt-7 border-2">Lihat Galeri</button>
            </div>
        </>
    )
}

export default Gallery