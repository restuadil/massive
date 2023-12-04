import { nanoid } from "nanoid"
import Footer from "../../../components/Footer/Footer"
import Navbar from "../../../components/Navbar/Navbar"
import Request from "../../../components/Request/Request"

const Kesehatan = () => {
    const data = [
        {
            title: "CIPTAKAN SUASANA YANG NYAMAN",
            content: "Sebelum memeriksakan anak kucingmu, pilih tempat dia merasa paling nyaman untuk berbaring - mungkin di tempat tidurnya atau pangkuanmu. Ketika dia diperiksa, sentuhlah dia dengan lembut dan juga ajak dia berbicara."
        },
        {
            title: "PERIKSA PERNAPASAN DAN PERUTNYA",
            content: "Dengarkan dengan seksama cara bernafas anak kucingmu, pastikan bahwa itu normal dan wajar. Pastikan kamu juga membelainya di bagian perut, agar kamu dapat mengetahui jika ada sesuatu yang janggal disana."
        },
        {
            title: "PERIKSA MATA DAN TELINGANYA",
            content: "Periksalah telinga anak kucingmu, mulai dari setiap goresan di bagian luar, radang atau kotoran yang bewarna sedikit lebih gelap. Kamu juga harus melihat matanya, untuk memeriksa adanya kotoran, bengkak atau cedera. Jangan pernah menyentuh bola matanya, dan jangan pernah memberikan tetes mata tanpa konsultasi lebih lanjut dengan doktermu.Ketahui tips dari Whiskas bagaimana cara merawat mata, telinga, gigi dan cakar kucing anda dengan tepat sehingga ia tetap terjaga dengan sehat."
        },
        {
            title: "PERIKSA MULUT DAN HIDUNGNYA",
            content: "Mulailah dengan membuka mulut anak kucingmu dengan lembut dan seksama, dan lihatlah jika ada tanda - tanda gigi yang berlubang, radang gusi, atau endapan plak. Kesehatan anak kucing pada umumnya dapat dilihat dari hidung sebagai indikator, maka pastikan hidungnya dingin dan lembab. Jika mereka mempunyai kulit hidung yang sedikit keras atau terlalu sering bersin, ada kemungkinan dia sedang sakit. Jika kamu khawatir dengan kondisinya, bawalah dia ke dokter hewan untuk pemeriksaan lebih lanjut."
        },
        {
            title: "PERIKSA CAKARNYA",
            content: "Periksa cakar anak kucingmu untuk memastikan bahwa tidak ada kuku yang rusak atau hilang. Kamu juga harus memeriksa apabila ada luka pada kulit di bantalan kuku - kukunya. Menekan kakinya akan menyebabkan dia bereaksi dengan cakarnya, ingatlah bahwa kukunya sangat tajam.Ketahui bagaimana cara merawat cakar kucing anda dengan tepat sehingga cakarnya tidak rusak maupun hilang.."
        },
        {
            title: "KONSULTASI DENGAN DOKTER HEWAN",
            content: "Jika kamu khawatir dengan kondisi anak kucingmu, awasi dia untuk satu sampai dua hari kedepan. Apabila kamu masih ragu, hubungi dokter hewan secepatnya."
        },
    ]
    const vaksin = [
        {
            title: "Vaksin Tricat",
            content: "Vaksin hidup yang diberikan melalui suntikan secara subkutan (suntikan pada lemak di bawah kulit). Ia mengandung tiga strain virus yang dilemahkan: virus panleukopenia (yang juga dikenal sebagai MW-1), kalisivirus (calicivirus), dan virus herpes atau rinotrakeitis (rhinotracheitis). Dosis 1 ml vaksin yang dilarutkan disuntikkan dengan selang waktu 3 sampai 4 minggu"
        },
        {
            title: "Vaksin Tetracat",
            content: "Vaksin untuk klamidia (chlamydia), panleukopenia, rinotrakeitis (rhinotracheitis) dan kalisivirus (calicivirus) biasanya digunakan untuk mencegah penyakit dengan gejala seperti pilek, bersin, konjungtivitis (conjunctivitis) dan noda mata. Selain itu, vaksin untuk kucing ini juga sering diberikan untuk mencegah pneumonia, atau peradangan paru-paru akibat infeksi. "
        },
        {
            title: "Vaksin Rabies",
            content: "Rabies sangat menakutkan karena dapat ditularkan ke manusia melalui gigitan dan cakaran. Setelah didiagnosis rabies, hewan peliharaan Anda mungkin harus menjalani eutanasia. Vaksin untuk kucing ini biasanya direkomendasikan oleh dokter hewan untuk setiap tahun setelah kucing mencapai usia 12 minggu."
        },
        {
            title: "VAKSIN UNTUK PENYAKIT TERTENTU",
            content: "Untuk menghindari kucing Anda tertular klamidofilia karena berinteraksi dengan kucing lain, seringkali penting untuk mendiagnosis kucing Anda lebih awal dan divaksinasi untuk klamidia. Vaksinasi pada kucing juga dapat secara signifikan membantu menghindari virus immunodeficiency kucing (feline immunodeficiency virus) atau FIV, atau AIDS kucing. "
        },
    ]
    return (
        <>
            <Navbar logo="../../img/logo.png" />
            <div className="my-10 flex flex-row justify-between items-center mx-32 gap-5">
                <div className="flex flex-col gap-10">
                    <h1 className="font-chewy text-5xl text-left text-[#FF6C22]">Bagaimana cara memeriksakan kesehatan anak kucing anda?</h1>
                    <p className="font-montserrat">Kesehatan anak kucing pada umumnya dapat dilihat dari hidung sebagai indicator,jika mereka mempunyai kulit hidung yang sedikit keras atau terlalu sering bersin, ada kemungkinan dia sedang sakit.
                    </p>
                </div>
                <img src="../../../img/homevisit.png" alt="" className="w-[500px] " />
            </div>
            <div className="grid grid-cols-2 gap-5 mx-32">
                {data.map((item) => {
                    return (
                        <div className="bg-slate-200 p-5 rounded-md " key={nanoid()}>
                            <h1 className="text-center underline mb-3">{item.title}</h1>
                            <p className="font-montserrat">{item.content}</p>
                        </div>
                    )
                })}
            </div>

            <div style={{ backgroundImage: `url(../../img/bg.png)` }} className="bg-center bg-cover bg-no-repeat">
                <div className="flex flex-row items-center gap-2 justify-center pt-10">
                    <h1 className="font-poppins font-bold text-2xl">PENGENALAN TENTANG <span className="text-red">VAKSIN</span></h1>
                    <img src="../../img/obat.png" alt="" className="h-10" />
                </div>
                <div className="mx-32">
                    <p>Vaksinasi kucing, di masa sekarang, memainkan peran integral dalam memastikan kucing kesayangan Anda memiliki hidup yang panjang dan nyaman tanpa penyakit apapun. Vaksinasi kucing telah terbukti penting dalam meningkatkan sistem kekebalan pada kucing dan memberi mereka semua antibodi yang diperlukan sehingga mereka tidak sering jatuh sakit.
                    </p>
                    <br />
                    <p>
                        Jadi, penting untuk memastikan mereka divaksinasi dengan benar untuk dapat menghindari risiko kesehatan. Vaksin modern telah berkembang pesat dalam menstimulasi sistem kekebalan pada kucing, dan memastikan mereka mampu melawan dan menghalang partikel asing yang dapat menyebabkan kerusakan signifikan pada kesehatan mereka.
                    </p>
                </div>

                <div className="mx-10">
                    <h1 className="font-montserrat text-2xl my-5">JENIS-JENIS <span className="text-red">VAKSIN</span>KUCING</h1>
                    <div className="flex flex-row gap-3">
                        {
                            vaksin.map((item) => {
                                return (
                                    <div key={nanoid()} className="border border-slate-200 px-2 py-5 rounded-md">
                                        <h1 className="text-center font-bold">{item.title}</h1>
                                        <p>{item.content}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


            <Request bg={"../../img/bg2.png"} />
            <Footer logo="../../img/logo.png" bg={`url("../../img/bg.png")`} />
        </>
    )
}

export default Kesehatan