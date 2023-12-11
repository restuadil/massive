import { nanoid } from "nanoid";
import CardPet from "../../components/Card/CardPet/CardPet";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Request from "../../components/Request/Request";

const Kucing = () => {
    const Cat = [
        {
            to: "persiapan",
            title: "Hal yang perlu disiapkan untuk memelihara Kucing",
        },
        { to: "jenis", title: "Mengenal jenis kucing yang populer di Indonesia" },
        { to: "pertimbangan", title: "Pertimbangan untuk mengadopsi anak kucing" },
        { to: "perawatan", title: "Cara merawat kucing" },
        { to: "pemahaman", title: "Bagaimana memahami perilaku anak kucing" },
        {
            to: "kesehatan",
            title: "Hal yang perlu diperhatikan pada kesehatan kucing",
        },
    ];

    return (
        <>
            <Navbar logo="../../img/logo.png" />

            <div className="my-10 flex flex-row  items-center mx-32 gap-5  justify-between">
                <h1 className="font-chewy text-5xl text-left text-[#FF6C22]">
                    AGAR KUCING ANDA TETAP SEHAT, BERIKUT CARA MERAWAT KUCING DENGAN BAIK
                </h1>
                <img src="../../../img/homevisit.png" alt="" className="w-[500px]" />
            </div>
            <div className="my-10 flex flex-row justify-between items-center mx-32 gap-5">
                <img src="../../../img/homevisit.png" alt="" className="w-[500px]" />
                <div>
                    <h1 className="font-poppins font-extrabold text-2xl">
                        Bagaimana cara merawat kucing dengan baik dan benar?
                    </h1>
                    <p className="font-montserrat my-3">
                        Selain memberikan makanan yang tepat, ada beberapa cara merawat
                        kucing agar tumbuh sehat. Yuk, simak bagaiamana cara memelihara dan
                        tips merawat kucing dengan baik berikut. Kucing merupakan hewan
                        peliharaan yang disukai banyak orang karena menggemaskan. Meski bisa
                        jadi teman baru di rumah, sayangnya tak semua orang bisa merawat
                        kucing. Bukan hanya tempat tinggal dan makanan saja, kucing juga
                        memerlukan perawatan agar tetap sehat.
                    </p>
                </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center mx-20 gap-5 my-5">
                {Cat.map((card) => {
                    return <CardPet card={card} key={nanoid()} />;
                })}
            </div>

            <Request bg={"../../img/bg2.png"} />
            <Footer logo="../../img/logo.png" bg={`url("../../img/bg.png")`} />
        </>
    );
};

export default Kucing;
