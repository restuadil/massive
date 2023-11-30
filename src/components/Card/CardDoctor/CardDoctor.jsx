/* eslint-disable react/prop-types */

import { nanoid } from "nanoid"
import { Link } from "react-router-dom"

const CardDoctor = ({ doctor }) => {
    return (
        <>
            {doctor.map((item) => {
                return (
                    <div className="bg-[#FF6C22] flex flex-row gap-5 items-center justify-center p-7 rounded-lg mx-32" key={nanoid()}>
                        <img src={item.img} alt="" className="rounded-full" />
                        <div className="flex flex-col ">
                            <div>
                                <h1 className="font-bold font-poppins text-2xl">{item.name}</h1>
                                <div className="flex flex-row gap-5">
                                    <span>{item.pet}</span>
                                    <span>{item.star}</span>
                                    <span>{item.job}</span>
                                </div>
                            </div>
                            <div className="flex flex-row-reverse gap-3">
                                <div className="flex flex-col">
                                    <h1 className="font-bold">Jadwal</h1>
                                    {item.jadwal.map((jadwalItem, index) => (
                                        <span key={index}>{jadwalItem}</span>
                                    ))}
                                </div>
                                <div className="flex flex-col ">
                                    <h2 className="font-bold">Nomor STRV</h2>
                                    <span>{item.strv}</span>
                                    <br />
                                    <br />
                                    <h2 className="font-bold">Tempat Praktik</h2>
                                    <span>{item.location}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2 ">
                            <span className="font-bold">Rp.{item.price}</span>
                            <Link to={"/chat"}>
                                <button className="bg-red py-2 px-12 rounded-md text-white font-poppins">Chat</button>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default CardDoctor