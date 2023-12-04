import { nanoid } from "nanoid"
import CardPet from "../../components/Card/CardPet/CardPet"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import Request from "../../components/Request/Request"

const Anjing = () => {
    const cardCat = ["Hal yang perlu disiapkan untuk memelihara Anjing", "Mengenal jenis Anjing yang populer di indonesia", "pertimbangan untuk mengadopsi anak Anjing", "cara merawat Anjing", "bagaimana memahami perilaku anak Anjing", "hal yang  diperhatikan pada kesehatan Anjing"]
    return (
        <>
            <Navbar logo="../../img/logo.png" />

            <div className="my-10 flex flex-row justify-between items-center mx-32 gap-5">
                <h1 className="font-chewy text-5xl text-left text-[#FF6C22]">Hal - hal yang perlu diketahui jika berkeinginan memelihara anjing</h1>
                <img src="../../../public/img/homevisit.png" alt="" className="w-[500px]" />
            </div>
            <div className="my-10 flex flex-row justify-between items-center mx-32 gap-5">
                <img src="../../../public/img/homevisit.png" alt="" className="w-[500px]" />
                <div>
                    <h1 className="font-poppins font-extrabold text-2xl">Bagaimana cara merawat anjing dengan baik dan benar?</h1>
                    <p className="font-montserrat my-3">Anjing dikenal sebagai hewan yang setia.
                        Hal itu bisa terjadi jika kamu memberikan makanan, tempat tinggal, perawatan yang bertanggung jawab, dan cinta.
                        Sebagai balasannya, anjing akan patuh dan menyayangi kamu.
                        Sama seperti manusia, anjing juga bisa sakit atau mengalami kondisi tidak mengenakan lainnya.
                        Oleh karena itu, sebagai hewan peliharaan, anjing juga memerlukan perawatan yang tepat agar tetap sehat.
                        <br />
                        <br />
                        Nah, agar kondisi anjingmu tetap prima, yuk simak di bawah hal - hal yang perlu diperhatikan pada anjingmu dengan baik!

                    </p>
                </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center mx-20 gap-5 my-5">
                {
                    cardCat.map((card) => {
                        return (
                            <CardPet card={card} key={nanoid()} />
                        )
                    })

                }
            </div>

            <Request bg={"../../img/bg2.png"} />
            <Footer logo="../../img/logo.png" bg={`url("../../img/bg.png")`} />
        </>
    )
}

export default Anjing