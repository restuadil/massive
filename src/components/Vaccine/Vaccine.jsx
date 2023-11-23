/* eslint-disable react/prop-types */
import { useState } from "react"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import { dataVaksinKucing } from "../../Utils/dataVaksinKucing"
import { nanoid } from "nanoid"
const Vaccine = ({ data, title }) => {
    const [index, setIndex] = useState(0)
    const handleNext = () => {
        setIndex(index + 1)
    }
    const handlePrev = () => {
        setIndex(index - 1)
    }
    return (
        <>
            <div className="py-3 relative md:hidden">
                <h1 className="font-bold font-poppins text-3xl text-center mt-3">{title}</h1>
                <div className="flex flex-col gap-5 p-3 mx-14 my-5 bg-primary rounded-md">
                    <h1 className="font-bold font-poppins text-center">
                        {data[index].range}
                    </h1>
                    <ul className="flex flex-col justify-center items-center">
                        <li>{data[index].vaksin[0]}</li>
                        <li>{data[index].vaksin[1]}</li>
                        <li>{data[index].vaksin[2]}</li>
                    </ul>
                    <span className="text-left">{data[index].title}</span>
                </div>
                {
                    index > 0 ?
                        <button className="text-5xl font-semibold absolute top-32 left-2" onClick={handlePrev}><GrFormPrevious /></button> : ""
                }
                {
                    index < data.length - 1 ?
                        <button className="text-5xl font-semibold absolute top-32 right-2" onClick={handleNext}><GrFormNext /></button> : ""
                }
                <p className="font-montserrat mx-10 text-justify text-sm">* Pemberian vaksin disesuaikan dengan kondisi/umur hewan dan saran dari masing-masing dokter hewan</p>
            </div>
            <div className="hidden md:block py-3">
                <h1 className="font-bold font-poppins text-3xl text-center mt-3">
                    {title}
                </h1>
                <div className="flex flex-row justify-center items-center gap-3 mt-3">
                    {
                        dataVaksinKucing.map((data) => (
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
                        ))
                    }
                </div>
                <p className="font-montserrat mx-10 text-justify text-sm md:mt-3 md:mr-7">* Pemberian vaksin disesuaikan dengan kondisi/umur hewan dan saran dari masing-masing dokter hewan</p>
            </div>
        </>
    )
}

export default Vaccine