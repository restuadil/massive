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
            <div className="font-poppins mx-32 my-10">
                <h1 className="text-red text-2xl font-bold my-2">OLAHRAGA</h1>
                <p>Semua anjing memerlukan olahraga, tetapi jumlah dan jenisnya bervariasi sesuai dengan usia, ukuran, dan rasnya.</p>
                <ul className="list-disc ml-10">
                    <li>Pastikan ada ruang untuk berolahraga: Jalan-jalan seekor anjing tidak boleh hanya dianggap sebagai waktu untuk buang air kecil.</li>
                    <li>Sedikit dan sering: Ingat, anjing berukuran sedang hingga sangat besar memiliki periode pertumbuhan yang lebih lama saat tulang dan persendiannya berkembang. Karena itu, mereka tidak boleh berjalan jauh atau melakukan olahraga tertentu sampai mereka lebih dewasa, tetapi sebaiknya lakukan dengan sedikit dan sering.</li>
                    <li>Luangkan waktu untuk bermain: Bermain adalah bagian alami dari olahraga anjing dan membantu perkembangan psikologis mereka. Ini bagus untuk anjing Anda dengan beberapa cara berbeda: agar Anda dapat menghabiskan waktu bersama mereka, untuk memperkuat ikatan Anda dengan anjing Anda, untuk mengontrol berat badan mereka, untuk menjaga vitalitas mereka, dan untuk memperkuat sistem kardiovaskular dan kekebalan tubuh mereka.</li>
                </ul>
            </div>
            <div className="font-poppins mx-32 my-10">
                <h1 className="text-red text-2xl font-bold my-2">LINGKUNGAN</h1>
                <p>Perkembangan perilaku anak anjing memiliki beberapa fase termasuk periode sosialisasi, yang dimulai dari usia empat minggu hingga 14 minggu.
                    <br />
                    Periode ketakutan ada dalam periode sosialisasi ini, sehingga trauma apa pun yang terjadi selama masa ini mungkin memiliki konsekuensi negatif yang berlangsung lama. Karena itu, penting untuk memperhatikan pengalaman lingkungan yang diterima anak anjing sejak hari pertama.</p>
                <ul className="list-disc ml-10">
                    <li>Beri mereka tempat tidur mereka sendiri: Pastikan mereka memiliki tempat tidur sendiri yang dapat mereka gunakan untuk beristirahat dan merasa aman.</li>
                    <li>Berikan lingkungan yang menstimulasi: Misalnya, kotak kardus besar untuk bersembunyi dan mainan karet untuk digigit adalah favorit bagi anak anjing. Sangat penting untuk memastikan semua sesi bermain diawasi.</li>
                    <li>Biasakan mereka dengan lingkungan baru secara bertahap: Jika Anda tinggal di kota, Anda harus secara bertahap membiasakan mereka dengan hal-hal yang harus mereka hadapi seperti mobil, eskalator, lift, kereta, trem, atau bus.</li>
                    <li>Biasakan mereka dengan lingkungan baru secara bertahap: Jika Anda tinggal di kota, Anda harus secara bertahap membiasakan mereka dengan hal-hal yang harus mereka hadapi seperti mobil, eskalator, lift, kereta, trem, atau bus.</li>
                </ul>
            </div>
            <Request bg={"../../img/bg2.png"} />
            <Footer logo="../../img/logo.png" bg={`url("../../img/bg.png")`} />
        </>
    )
}

export default PerawatanAnjing