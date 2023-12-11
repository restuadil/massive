/* eslint-disable react/prop-types */


const CardDoctor = ({ doctor }) => {
    const jadwal = ["Senin 10:00 - 13:00 WIB",
        "Selasa 10:00 - 13:00 WIB",
        "Rabu 10:00 - 13:00 WIB",
        "Kamis 18:00 - 20:00 WIB",
        "Jumat 18:00 - 20:00 WIB"]
    return (
        <>
            <div className="bg-[#FF6C22] flex flex-row gap-5 doctors-center justify-center p-7 rounded-lg mx-32">
                <img src={`${doctor.img}`} alt="" className="rounded-full h-[200px] w-[200px]" />
                <div className="flex flex-col ">
                    <div>
                        <h1 className="font-bold font-poppins text-2xl">{doctor.name}</h1>
                        <div className="flex flex-row gap-5">
                            <span>{doctor.specialist}</span>
                            <span>{doctor.star}</span>
                            <span>{doctor.exp}</span>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse gap-3">
                        <div className="flex flex-col">
                            <h1 className="font-bold">Jadwal</h1>
                            {jadwal.map((jadwaldoctor, index) => (
                                <span key={index}>{jadwaldoctor}</span>
                            ))}
                        </div>
                        <div className="flex flex-col ">
                            <h2 className="font-bold">Nomor STRV</h2>
                            <span>{doctor.strv}</span>
                            <br />
                            <br />
                            <h2 className="font-bold">Tempat Praktik</h2>
                            <span>{doctor.location}</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col doctors-center gap-2 ">
                    <span className="font-bold">Rp.{doctor.price}</span>
                    <button className="bg-red py-2 px-12 rounded-md text-white font-poppins">Chat</button>
                </div>
            </div>
        </>
    )
}

export default CardDoctor