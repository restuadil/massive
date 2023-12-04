import Footer from "../../../components/Footer/Footer"
import Navbar from "../../../components/Navbar/Navbar"
import Request from "../../../components/Request/Request"

const Perawatan = () => {
    const data = [
        {
            title: "Beri Makanan Bernutrisi",
            img: "../../../../img/makan.png",
            content: "Hewan lucu ini juga membutuhkan daging kaya protein untuk memperkuat jantung, penglihatan, dan sistem reproduksinya.Daging sapi, ayam, dan kalkun yang dimasak sangat cocok untuk kucing.Berikan makanan sesuai dengan kebutuhan nutrisi dan usia kucing. Kucing di bawah usia 12 bulan, lebih perlu makanan yang berprotein tinggi, dibandingkan yang usianya lebih dari 12 bulan,” kata drh. Jepriadi Kertawinata."
        },
        {

            title: "Rutin Membersihkan Kucing",
            img: "../../../../img/dog1.jpeg",
            content: "Meski jarang dimandikan, sebagian besar kucing memang relatif bersih. Namun, kamu harus tetap merawat kucing dengan menyisir bulunya secara teratur. Sering menyisir rambut kucing akan menjaganya tetap bersih, mencegah kerontokan, dan mengurangi timbulnya bulu menggumpal. Jika diperlukan, kamu juga bisa memandikan kucing sekitar 1-2 kali sebulan, tergantung kebersihannya. Selain terlihat bagus, rambut yang disisir memiliki lebih sedikit rambut mati, yang berarti lebih sedikit rambut yang akan terbawa saat kucing Anda grooming diri sendiri."
        },
        {
            title: "Beri Makanan Bernutrisi",
            img: "../../../../img/makan.png",
            content: "Hewan lucu ini juga membutuhkan daging kaya protein untuk memperkuat jantung, penglihatan, dan sistem reproduksinya.Daging sapi, ayam, dan kalkun yang dimasak sangat cocok untuk kucing.Berikan makanan sesuai dengan kebutuhan nutrisi dan usia kucing. Kucing di bawah usia 12 bulan, lebih perlu makanan yang berprotein tinggi, dibandingkan yang usianya lebih dari 12 bulan,” kata drh. Jepriadi Kertawinata."
        },
        {
            title: "Rutin Membersihkan Tempat Tidur Kucing",
            img: "../../../../img/tidur.png",
            content: "Cara merawat kucing dengan baik bisa dimulai dari memberikan tempat khusus untuk tidur dan beristirahat. Kamu bisa menyiapkan tempat yang nyaman, misalnya alas tidur dilapisi selimut agar kucing tetap hangat.Secara rutin, cucilah tempat tidur kucing agar tidak ada kotoran dan bakteri yang bersarang.Kuman dan bakteri bisa menyebabkan kucing lebih rentan sakit."
        },
        {
            title: "Rutin Membersihkan Tempat Tidur Kucing",
            img: "../../../../img/tidur.png",
            content: "Cara merawat kucing dengan baik bisa dimulai dari memberikan tempat khusus untuk tidur dan beristirahat. Kamu bisa menyiapkan tempat yang nyaman, misalnya alas tidur dilapisi selimut agar kucing tetap hangat.Secara rutin, cucilah tempat tidur kucing agar tidak ada kotoran dan bakteri yang bersarang.Kuman dan bakteri bisa menyebabkan kucing lebih rentan sakit."
        },
        {
            title: "Mengganti Litter Box",
            img: "../../../../img/litter.png",
            content: "Cara mengurus kucing lainnya adalah membersihkan dan mengganti litter box (bak pasir atau kotak untuk kotoran) secara rutin setiap hari. Jika ada lebih dari satu ekor kucing di rumah, maka pisahkan litter box."
        },
        {
            title: "Lakukan Vaksinasi",
            img: "../../../../img/vaksin.png",
            content: "Biasanya, anak kucing mulai vaksinasi pada usia 6-8 minggu hingga 16 minggu. Setahun kemudian, ia harus mendapat booster. Kucing dewasa lebih jarang membutuhkan vaksinasi, biasanya hanya setiap tahun atau tiga tahun.Sistem kekebalan hewan akan disiapkan untuk bereaksi terhadap infeksi mikroorganisme tersebut di masa depan.Menurut drh.Jepriadi, kamu bisa memberikan vaksinasi dan obat cacing teratur untuk kucing, antara 1-3 bulan sekali."
        },
    ]
    return (
        <>
            <Navbar logo="../../img/logo.png" />
            <div className="my-10 flex flex-row justify-between items-center mx-32 gap-5">
                <h1 className="font-chewy text-5xl text-left text-[#FF6C22]">Apa yang harus di pertimbangkan sebelum memelihara kucing</h1>
                <img src="../../../img/homevisit.png" alt="" className="w-[500px] " />
            </div>
            <div className="mx-32">
                <p className="font-montserrat">Selain memberikan nutrisi yang cukup, ada sejumlah cara merawat kucing agar tumbuh sehat. Nah di bawah ini yuk kita cari tahu bagaimana cara merawat . Kucing merupakan hewan peliharaan yang digemari banyak orang karena sangat menggemaskan. Meski bisa menjadi teman baru di rumah, sayangnya tidak semua orang bisa memelihara kucing. Bukan hanya tempat tinggal dan makanan saja, kucing juga memerlukan perawatan agar tetap sehat. Bagaimana cara merawat kucing dengan baik? Simak tips berikut ini:</p>
                <img src="https://images.unsplash.com/photo-1516750105099-4b8a83e217ee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-[700px] block mx-auto my-10" />
            </div>
            <div className="mx-56">
                {
                    data.slice(0, 3).map((item, index) => {
                        const isEvenIndex = index % 2 === 0;
                        const flexDirection = isEvenIndex ? 'flex-row' : 'flex-row-reverse';
                        const marginClass = isEvenIndex ? 'ml-10' : 'mr-10';
                        return (
                            <div className={`flex justify-center my-10 items-center ${flexDirection}`} key={index}>
                                <img src={item.img} alt="" className="w-[350px]" />
                                <div className={marginClass}>
                                    <h1 className="font-poppins font-bold text-xl my-2">{index + 1}.{item.title}</h1>
                                    <p className="font-montserrat text-justify">{item.content}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="my-5 flex justify-center items-center">
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/vvfZBptkN3w`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="mx-56">
                {
                    data.slice(3, 6).map((item, index) => {
                        const isEvenIndex = index % 2 === 0;
                        const flexDirection = isEvenIndex ? 'flex-row' : 'flex-row-reverse';
                        const marginClass = isEvenIndex ? 'ml-10' : 'mr-10';
                        return (
                            <div className={`flex justify-center my-10 items-center ${flexDirection}`} key={index}>
                                <img src={item.img} alt="" className="w-[350px]" />
                                <div className={marginClass}>
                                    <h1 className="font-poppins font-bold text-xl my-2">{index + 4}.{item.title}</h1>
                                    <p className="font-montserrat text-justify">{item.content}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <Request bg={"../../img/bg2.png"} />
            <Footer logo="../../img/logo.png" bg={`url("../../img/bg.png")`} />
        </>
    )
}

export default Perawatan