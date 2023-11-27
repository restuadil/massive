/* eslint-disable react/prop-types */

import { nanoid } from "nanoid"

const CardDoctor = ({ doctor }) => {
    return (
        <>
            {doctor.map((item) => {
                return (
                    <div className="bg-[#FF6C22] flex flex-row gap-2 items-center justify-center p-7 rounded-lg" key={nanoid()}>

                        <img src={item.img} alt="" className="rounded-full" />
                        <div className="flex flex-col">
                            <div>
                                <h1>{item.name}</h1>
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

                        <button className="bg-red py-2 px-9 rounded-md">Chat</button>
                    </div>
                )
            })}
        </>
    )
}

export default CardDoctor