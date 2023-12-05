import { FaPlus } from "react-icons/fa"
import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
import { dataQuestions } from "../../Utils/dataQuestions"
import { useState } from "react"
import { nanoid } from "nanoid"
import Footer from "../../components/Footer/Footer"


// !! next looping data questions and router to detail questions
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
            <div className="my-3 mx-32">
                <h1 className="font-poppins font-bold text-2xl text-center mt-10">Daftar <span className="text-red">Pertanyaan</span></h1>
                <div className="flex flex-row gap-28">
                    <div className="flex flex-col gap-3 mt-10">
                        <h1 className="font-poppins text-2xl text-left text-red">Info Perusahaan</h1>
                        <h1 className="font-poppins text-2xl text-left">Layanan Vaksinasi</h1>
                        <h1 className="font-poppins text-2xl text-left">Konsultasi Dokter</h1>
                        <h1 className="font-poppins text-2xl text-left">Forum Pertanyaan</h1>
                    </div>
                    <div className="w-2/3">
                        <h1 className="text-2xl text-red font-poppins font-bold mb-10 mt-10">Info Perushaan</h1>
                        {dataQuestions.map((question) => (
                            <ul key={nanoid()} onClick={() => toggleAnswer(question.id)} className="">
                                <div className="my-1 ">
                                    <li className={`mx-5 flex flex-row justify-between items-center border-y-2 border-slate-300 ${openAnswerId === question.id ? "border-b border-white" : null}`}>
                                        <h2 className="text-left py-5 pr-5 w-full">{question.question}</h2>
                                        <div>
                                            <FaPlus
                                                className={`transform ${openAnswerId === question.id ? "rotate-45" : ""}  w-6 h-6 transition-transform`}
                                            />
                                        </div>
                                    </li>
                                    {openAnswerId === question.id && (
                                        <div className=" font-montserrat text-justify  mx-5 py-2">
                                            <p>{question.answer}</p>
                                        </div>
                                    )}
                                </div>
                            </ul>
                        ))}
                    </div>
                </div>


                <div className="bg-center bg-cover bg-no-repeat mt-10" style={{ backgroundImage: `url("img/bg.png")` }}>
                    <div className="mx-5 py-5">
                        <h1 className="text-red font-chewy font-bold text-3xl text-center">Ada Pertanyaan Lainya?</h1>
                        <form >
                            <div className="flex flex-col mt-3">
                                <label htmlFor="name" className="font-montserrat font-bold">Nama Kamu : <span className="text-red text-2xl">*</span>
                                </label>
                                <input type="text" name="name" id="" className=" shadow-slate-500 shadow-md py-1 rounded-md" />
                            </div>
                            <div className="flex flex-col mt-3">
                                <label htmlFor="name" className="font-montserrat font-bold">Email : <span className="text-red text-2xl">*</span>
                                </label>
                                <input type="text" name="name" id="" className=" shadow-slate-500 shadow-md py-1 rounded-md" />
                            </div>
                            <div className="flex flex-col mt-3">
                                <label htmlFor="name" className="font-montserrat font-bold">Phone : <span className="text-red text-2xl">*</span>
                                </label>
                                <input type="text" name="name" id="" className=" shadow-slate-500 shadow-md py-1 rounded-md" />
                            </div>
                            <div className="flex flex-col mt-3">
                                <label htmlFor="name" className="font-montserrat font-bold">Jenis Hewan: <span className="text-red text-2xl">*</span>
                                </label>
                                <input type="text" name="name" id="" className=" shadow-slate-500 shadow-md py-1 rounded-md" />
                            </div>
                            <div className="flex flex-col mt-3">
                                <label htmlFor="name" className="font-montserrat font-bold">Pertanyaan Kamu : <span className="text-red text-2xl">*</span>
                                </label>
                                <input type="text" name="name" id="" className=" shadow-slate-500 shadow-md py-3 rounded-md" />
                            </div>
                        </form>
                        <button className="mt-8 block mx-auto font-chewy font-bold text-3xl text-center rounded-3xl border-2 border-black py-2 px-8"
                            onClick={() =>
                                alert("Pertanyaan Terkirim")

                            }
                        >
                            Submit Pertanyaan
                        </button>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default FandQ