import { FaPlus } from "react-icons/fa"
import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
import { dataQuestions } from "../../Utils/dataQuestions"
import { useState } from "react"
import { nanoid } from "nanoid"
dataQuestions
const FandQ = () => {
    const [openAnswerId, setOpenAnswerId] = useState(null);

    const toggleAnswer = (id) => {
        setOpenAnswerId((prevId) => (prevId === id ? null : id));
    };
    return (
        <>
            <Navbar />
            <Hero btnContent={"Tambahkan Pertanyaan"} img={"img/hero.jpeg"} >
                <h2 className="text-white text-4xl font-medium font-chewy mt-20 md:mt-0 md:text-4xl md:tracking-widest">Pertanyaan Yang Sering Di Tanyakan</h2>
                <p className="text-white font-poppins font-light text-xs tracking-wide md:mb-4">Anda Punya Pertanyaan, Kami Punya Jawaban</p>
            </Hero>
            <div className="my-3">
                <h1 className="font-poppins font-bold text-2xl text-center">Daftar <span className="text-red">Pertanyaan</span></h1>
                <div className="mt-3">
                    <ul className="flex flex-row justify-around items-center font-chewy">
                        <li className="text-red">Info </li>
                        <li>Vaksin</li>
                        <li>Konsultasi</li>
                        <li>Diskusi</li>
                        <li>Jadwal</li>
                    </ul>
                </div>
                <div className="mx-3 mt-5">
                    <h2 className="font-chewy text-xl text-red">Info Perusahaan</h2>
                    <div className="border-y-4 border-gray-500">
                        <div className="w-5/6 mx-auto flex flex-col justify-center text-center my-3">
                            <h1 className="text-3xl font-bold mt-5 text-white mb-5">Tanya Jawab Umum</h1>
                            {dataQuestions.map((question) => (
                                <ul key={nanoid()} onClick={() => toggleAnswer(question.id)}>
                                    <div className="my-1">
                                        <li className={`mx-5 flex flex-row justify-between items-center border-y-2 border-slate-300 ${openAnswerId === question.id ? "border-b border-white" : null}`}>
                                            <h2 className="text-left py-3">{question.question}</h2>
                                            <div>
                                                <FaPlus
                                                    className={`transform ${openAnswerId === question.id ? "rotate-45" : ""}  w-6 h-6 transition-transform`}
                                                />
                                            </div>
                                        </li>
                                        {openAnswerId === question.id && (
                                            <div className="text-xs font-montserrat text-justify  mx-5 py-2">
                                                <p>{question.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FandQ