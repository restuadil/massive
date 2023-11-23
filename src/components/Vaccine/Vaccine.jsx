/* eslint-disable react/prop-types */
import { useState } from "react"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
const Vaccine = ({ data }) => {
    const [index, setIndex] = useState(0)
    const handleNext = () => {
        setIndex(index + 1)
    }
    const handlePrev = () => {
        setIndex(index - 1)
    }
    return (
        <>
            <div className="py-3 relative">
                <h1 className="font-bold font-poppins text-3xl text-center">Dosis Vaksin Kucing</h1>
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
            </div>
        </>
    )
}

export default Vaccine