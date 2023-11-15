import { HiArrowNarrowRight } from "react-icons/hi"

const Gallery = () => {
    return (
        <>
            <div className="relative py-10">
                <h1 className="text-3xl text-center font-poppins font-bold  px-2 ">
                    Lihat Moment <span className="text-red">Bahagia</span> Kami
                </h1>
                <img src="img/dog1.jpeg" alt="dog" className="px-7 mt-2 mx-auto block rounded-sm" />
                <button className="absolute top-1/2 right-2 z-10 p-2 rounded-full bg-primary text-3xl cursor-pointer active:scale-105 active:text-white">
                    <HiArrowNarrowRight />
                </button>
            </div>
        </>
    )
}

export default Gallery