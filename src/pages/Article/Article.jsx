import CardQuestion from "../../components/Card/CardQuestion/CardQuestion"
import Footer from "../../components/Footer/Footer"
import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
import Request from "../../components/Request/Request"

const Article = () => {
    return (
        <>
            <Navbar />
            <Hero img={"img/hero.jpeg"} >
                <h2 className="text-white text-4xl font-medium font-chewy mt-20 md:mt-0 md:text-4xl md:tracking-widest">Lakukan yang <span className="text-red">TERBAIK</span> Untuk Hewan Peliharaan Anda</h2>
                <p className="text-white font-poppins font-light text-xs tracking-wide md:mb-4"> Memberikan keahlian perawatan hewan peliharaan di Allston, Brighton, Brookline, Chestnut Hill, Fenway, Kenmore, Newton Corner, MA</p>
            </Hero>
            <div className="mt-3 py-3 mx-10">
                <h1 className="font-poppins font-bold text-3xl text-center">Bagaimana cara merawat kucing dengan baik dan benar?</h1>
                <img src="/img/Frame 24.png" alt="" className="block mx-auto mt-5" />
                <p className=" text-justify mt-5 font-montserrat text-xl">Selain memberikan makanan yang tepat, ada beberapa cara merawat kucing agar tumbuh sehat. Yuk, simak bagaiamana cara memelihara dan tips merawat kucing dengan baik berikut. Kucing merupakan hewan peliharaan yang disukai banyak orang karena menggemaskan. Meski bisa jadi teman baru di rumah, sayangnya tak semua orang bisa merawat kucing. Bukan hanya tempat tinggal dan makanan saja, kucing juga memerlukan perawatan agar tetap sehat.</p>
            </div>
            <CardQuestion />
            <CardQuestion />
            <CardQuestion />
            <Request bg={"img/bg2.png"} />
            <Footer />
        </>
    )
}

export default Article