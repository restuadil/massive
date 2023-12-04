import Navbar from "../../../components/Navbar/Navbar"
import Request from "../../../components/Request/Request"
import Footer from "../../../components/Footer/Footer"


const PerawatanAnjing = () => {
    return (
        <>
            <Navbar logo="../../img/logo.png" />

            <div className="my-10 flex flex-row justify-between items-center mx-32 gap-5">
                <div className="flex flex-col gap-3 font-poppins">
                    <h1 className=" text-5xl text-left text-[#FF6C22]">apa saja jenis ras anjing yang ada ?</h1>
                    <h2 className=" text-2xl text-left">Ras yang berbeda. <span className="text-red">Kebutuhan yang berbeda</span></h2>
                    <p>Ada banyak ukuran, bentuk, dan kepribadian anjing. Begitu juga kebutuhan kesehatannya. Kami telah membuat formula khusus untuk mendukung masing-masing kebutuhan unik tersebut.</p>
                </div>
                <img src="../../../public/img/homevisit.png" alt="" className="w-[500px]" />
            </div>
            <div className="font-poppins mx-32">
                <h1 className="text-[#FF6C22] text-2xl my-2">Gimana cara merawat anjing yang baik dan benar?</h1>
                <p>Ada banyak informasi yang harus diperhatikan saat Anda pertama kali mendapatkan anak anjing, tetapi meluangkan waktu untuk memahami kebutuhannya sejak awal akan memastikan kesehatan fisik dan emosional anjing Anda ke depannya.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1597633544424-4da83804df40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-[500px] block mx-auto my-3" />
            <p className="mx-32 font-poppins">Ada sejumlah faktor yang akan memengaruhi kesehatan dan kesejahteraan anjing Anda, terutama ras dan usianya. Karena itu, penting bahwa segala sesuatu mulai dari kebutuhan nutrisi mereka hingga olahraga dan perawatan dipertimbangkan dengan memperhitungkan karakteristik khusus mereka. Namun, ada sejumlah hal yang dibutuhkan semua anjing untuk memastikan mereka menjadi anggota keluarga yang sehat dan baik.</p>
            <div className="font-poppins mx-32 my-10 text-justify">
                <h1 className="text-red text-2xl font-bold my-2">OLAHRAGA</h1>
                <p>Semua anjing memerlukan olahraga, tetapi jumlah dan jenisnya bervariasi sesuai dengan usia, ukuran, dan rasnya.</p>
                <ul className="list-disc ml-10">
                    <li>Pastikan ada ruang untuk berolahraga: Jalan-jalan seekor anjing tidak boleh hanya dianggap sebagai waktu untuk buang air kecil.</li>
                    <li>Sedikit dan sering: Ingat, anjing berukuran sedang hingga sangat besar memiliki periode pertumbuhan yang lebih lama saat tulang dan persendiannya berkembang. Karena itu, mereka tidak boleh berjalan jauh atau melakukan olahraga tertentu sampai mereka lebih dewasa, tetapi sebaiknya lakukan dengan sedikit dan sering.</li>
                    <li>Luangkan waktu untuk bermain: Bermain adalah bagian alami dari olahraga anjing dan membantu perkembangan psikologis mereka. Ini bagus untuk anjing Anda dengan beberapa cara berbeda: agar Anda dapat menghabiskan waktu bersama mereka, untuk memperkuat ikatan Anda dengan anjing Anda, untuk mengontrol berat badan mereka, untuk menjaga vitalitas mereka, dan untuk memperkuat sistem kardiovaskular dan kekebalan tubuh mereka.</li>
                </ul>
            </div>
            <div className="my-5 flex justify-center items-center">
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/Tn3lZE0rRBs`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="font-poppins mx-32 my-10 text-justify">
                <h1 className="text-red text-2xl font-bold my-2">PEMBERI MAKAN</h1>
                <p>Seperti halnya olahraga, kebutuhan nutrisi berubah seiring pertumbuhan anak anjing Anda. Pada awalnya, anak anjing akan membutuhkan beberapa kali makan kecil sehari, yang secara bertahap berkurang menjadi satu atau dua. Demikian juga, ukuran dan ras anjing Anda akan memengaruhi kebutuhan nutrisinya karena beberapa anjing memiliki toleransi pencernaan yang berbeda dari yang lain. Anjing harus selalu memiliki akses ke air, dan jangan memberi mereka makan terlalu banyak
                </p>
                <br />
                <p>Jika Anda tidak yakin dengan seberapa banyak mereka harus diberi makan, atau bagaimana tahap pertumbuhan mereka akan memengaruhi jumlah makanannya, mintalah saran dari dokter hewan. Mereka akan dapat memberikan panduan untuk pertumbuhan yang optimal dan membantu menghindari obesitas dan beban pada sendi yang berkembang.</p>
                <br />
                <p>Pada akhirnya, makanan harus memasok energi, tetapi juga harus membangun dan memelihara sel-sel tubuh, sehingga membantu mencegah masalah pencernaan, kulit, gigi, sendi, dan masalah yang berkaitan dengan usia. Makanan bernutrisi, yang memenuhi kebutuhan nutrisi kesehatan, akan menggabungkan jumlah nutrisi-nutrisi yang tepat.</p>
                <ul className="list-disc ml-10 mt-10">
                    <li>Jangan mengganti makanan secara tiba-tiba: Untuk menghindari gangguan pada sistem pencernaan anak anjing ketika pertama kali datang ke rumah, berikan makanan yang sama seperti yang dimakan sebelum ia dibawa oleh Anda. Jika Anda ingin mengubahnya, lakukan dengan perlahan selama periode transisi satu minggu dengan mencampurkan makanan lama dan baru dalam rasio yang bervariasi.</li>
                    <li>Dapatkan makanan yang tepat untuk usianya: Ada formula khusus bagi anak anjing berdasarkan usia, yang sangat cocok dengan kebutuhan pertumbuhan mereka. Untuk pertumbuhan yang optimal, ikuti rekomendasi dokter hewan.</li>
                    <li>Tetapkan rutinitas: Anjing adalah hewan kawanan dan membutuhkan penanda hierarki yang tepat. Beri makan anak anjing Anda setiap hari di tempat yang sama, pada saat yang sama, dan setelah Anda dan keluarga Anda makan agar ia mengerti bahwa Anda memiliki posisi dominan di rumah. Setelah makan, jika mungkin cegah anak anjing Anda dari melompat-lompat selama satu atau dua jam.</li>
                    <li>Jangan terlalu sering memberikan camilan: Camilan harus diberikan hanya sesekali untuk membantu menjaga berat badan ideal anjing Anda. Gula dan cokelat dilarang karena cokelat bisa beracun bagi anjing. Kibble berkalori rendah dapat digunakan sebagai alat bantu pelatihan.</li>
                </ul>
            </div>
            <div className="font-poppins mx-32 my-10 text-justify">
                <h1 className="text-red text-2xl font-bold my-2">LINGKUNGAN</h1>
                <p>Perkembangan perilaku anak anjing memiliki beberapa fase termasuk periode sosialisasi, yang dimulai dari usia empat minggu hingga 14 minggu.
                    <br />
                    Periode ketakutan ada dalam periode sosialisasi ini, sehingga trauma apa pun yang terjadi selama masa ini mungkin memiliki konsekuensi negatif yang berlangsung lama. Karena itu, penting untuk memperhatikan pengalaman lingkungan yang diterima anak anjing sejak hari pertama.</p>
                <ul className="list-disc ml-10 mt-5">
                    <li>Beri mereka tempat tidur mereka sendiri: Pastikan mereka memiliki tempat tidur sendiri yang dapat mereka gunakan untuk beristirahat dan merasa aman.</li>
                    <li>Berikan lingkungan yang menstimulasi: Misalnya, kotak kardus besar untuk bersembunyi dan mainan karet untuk digigit adalah favorit bagi anak anjing. Sangat penting untuk memastikan semua sesi bermain diawasi.</li>
                    <li>Biasakan mereka dengan lingkungan baru secara bertahap: Jika Anda tinggal di kota, Anda harus secara bertahap membiasakan mereka dengan hal-hal yang harus mereka hadapi seperti mobil, eskalator, lift, kereta, trem, atau bus.</li>
                    <li>Biasakan mereka dengan lingkungan baru secara bertahap: Jika Anda tinggal di kota, Anda harus secara bertahap membiasakan mereka dengan hal-hal yang harus mereka hadapi seperti mobil, eskalator, lift, kereta, trem, atau bus.</li>
                </ul>
            </div>
            <div className="font-poppins mx-32 my-10 text-justify">
                <h1 className="text-red text-2xl font-bold my-2 ">PELATIHAN</h1>
                <p>Perilaku dan kepatuhan yang baik perlu dimulai sejak dini. Program pelatihan harus dimulai sedini mungkin, pada usia ketika anak anjing secara alami memiliki kapasitas yang sangat baik untuk belajar.
                    <br />
                    Untuk kenyamanan Anda, dan orang lain, anjing Anda harus memahami beberapa aturan dasar kehidupan. Jangan ragu untuk memanggil bantuan profesional dalam pelatihan anjing Anda. Ada banyak klub anjing atau sekolah anak anjing yang dapat membantu mewujudkan tujuan Anda.</p>
                <ul className="list-disc ml-10 mt-5">
                    <li>Pelatihan kehidupan di rumah: Ketika tiba di rumah Anda, anak anjing Anda kemungkinan besar belum dilatih untuk kehidupan di rumah. Pelatihan membutuhkan waktu dan kesabaran tetapi jangan pernah menghukum atau memarahi anak anjing yang melakukan kesalahan. Namun, cari cara agar anak anjing Anda dapat berperilaku baik di dalam ruangan.</li>
                    <li>Mulailah melatih panggilan sejak dini: Langsung sejak awal, ucapkan namanya dengan perlahan dan jelas untuk menarik perhatiannya dan mengaitkan namanya dengan setiap perintah. Pilihlah waktu-waktu ketika anak anjing Anda siaga untuk membantunya mengenal Anda, dan minta dia mendatangi Anda agar mengajarinya untuk patuh.</li>
                    <li>Secara bertahap biasakan mereka dengan mobil: Biasakan anak anjing Anda masuk ke dalam mobil sejak usia dini, sehingga berada di mobil tidak membuatnya khawatir. Lakukan beberapa perjalanan singkat sebelum perjalanan panjang.</li>

                </ul>
            </div>
            <Request bg={"../../img/bg2.png"} />
            <Footer logo="../../img/logo.png" bg={`url("../../img/bg.png")`} />
        </>
    )
}

export default PerawatanAnjing