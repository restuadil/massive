import { dataLayanan } from "../../Utils/dataLayanan"
import { nanoid } from "nanoid"
import { HiArrowNarrowRight } from "react-icons/hi"
const Layanan = () => {

    return (
        <>
            <h1 className="text-center text-[#33363F] font-bold text-xl my-10">Pelayanan Kami</h1>
            <div className="flex flex-col justify-center gap-5 mx-16 mb-5 md:mx-32 lg:mx-40 md:flex-row md:flex-wrap md:gap-12 ">
                {
                    dataLayanan.map((layanan) => {
                        return (
                            <div className="flex flex-col justify-start items-center border border-purple-400 rounded-md hover:bg-primary cursor-pointer hover:text-white md:w-[320px] px-5 py-2 md:gap-1" key={nanoid()}>
                                <img src={layanan.icon} alt="" className="w-[78px]" />
                                <h1 className="font-bold ">{layanan.title}</h1>
                                <p className="hidden md:block text-center">{layanan.content}</p>
                                <div className="flex items-center gap-1 mb-3">
                                    <p className="font-bold font-chewy ">Learn More </p>
                                    <HiArrowNarrowRight />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Layanan