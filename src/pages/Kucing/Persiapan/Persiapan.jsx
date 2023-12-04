import Footer from "../../../components/Footer/Footer"
import Navbar from "../../../components/Navbar/Navbar"
import Request from "../../../components/Request/Request"

const Persiapan = () => {
    return (
        <>
            <Navbar logo="../../img/logo.png" />
            <div className="my-10 flex flex-row justify-between items-center mx-32 gap-5">
                <img src="../../../img/homevisit.png" alt="" className="w-[500px]" />
                <h1 className="font-chewy text-5xl text-left text-[#FF6C22]">Hal apa saja yang perlu kita siapkan untuk memelihara Kucing</h1>
            </div>
            <div className="mt-5 flex flex-row justify-between items-center mx-40">
                <div className="w-[50%]">
                    <p className="font-montserrat text-justify">Memelihara kucing mungkin tampak mudah, namun bagi pemula, penting untuk melakukan beberapa persiapan sebelum memulai. Banyak hal yang perlu dipersiapkan, mulai dari perumahan, perawatan hingga kondisi kesehatan.
                        Apalagi jika teman-teman ingin memelihara kucing ras  di rumah.
                        Beberapa ras kucing memerlukan perawatan yang berbeda-beda, misalnya kucing anggora  berbulu panjang memerlukan perawatan khusus pada bulunya.
                    </p>
                </div>
                <img src="../../../img/persiapankucing.png" alt="" />
            </div>
            <h1 className="font-poppins font-bold text-2xl text-center ]">HAL  YANG PERLU DISIAPKAN UNTUK MENYAMBUT <span className="text-red text-3xl">KUCING KESAYANGAN</span> ANDA</h1>
            <div className="mx-32">
                <div className="my-5">
                    <h1 className="text-[#FF6C22] font-semibold font-poppins my-8">1.Menyiapkan Tempat Aman dan Nyaman untuk kucing</h1>
                    <p className="font-montserrat">Anak kucing suka memanjat, menjelajah, dan bersembunyi. Jadi, penting untuk melakukan sejumlah perlindungan di rumah Anda sebelum mengambil anak kucing untuk memastikan rumah Anda aman bagi mereka. Atur ulang peletakan barang-barang yang ada di rumah dengan menjauhkan barang-barang penting dari tempat tinggi yang bisa dijatuhkan saat kucing bermain.
                    </p>
                </div>

                <div className="my-5">
                    <h1 className="text-[#FF6C22] font-semibold font-poppins my-8">2.Hal-hal yang dibutuhkan untuk anak kucing Anda</h1>
                    <p className="font-montserrat">Sebelum kedatangan anak kucing, pastikan Anda memiliki semua yang dibutuhkan untuk merawatnya dan membantunya beradaptasi dengan rumah baru. Berikut beberapa hal penting.
                    </p>
                    <ul className="list-disc ml-10 my-3">
                        <li className="my-1">Tempat tidur. Buat tempat yang aman dan nyaman untuk tidur kucing. Beberapa anak kucing suka berpindah tempat tidur secara rutin, jadi mungkin diperlukan lebih dari satu tempat tidur.</li>
                        <li className="my-1">Kandang pengangkut. Pilih kandang yang stabil dan gelap atau dapat ditutupi dengan selimut, dan cukup besar untuk ketika anak kucing sudah dewasa.</li>
                        <li className="my-1">Tempat tidur. Buat tempat yang aman dan nyaman untuk tidur kucing. Beberapa anak kucing suka berpindah tempat tidur secara rutin, jadi mungkin diperlukan lebih dari satu tempat tidur.an.</li>
                        <li className="my-1">Makanan anak kucing untuk mendukung pertumbuhan. Pertama, pertahankan makanan anak kucing yang biasa diberikan oleh pemilik sebelumnya</li>
                        <li className="my-1">Kotak pasir. Baki tertutup paling baik untuk meminimalkan tumpahan dan bau. Beli juga sekop untuk membuang kotoran.</li>
                        <li className="my-1">Perlengkapan kebersihan. Pastikan Anda memiliki bahan pembersih yang tidak berbahaya dan tidak berbau agar tidak membahayakan.</li>
                        <li className="my-1">Peralatan perawatan. Pilih sikat atau sisir yang cocok untuk rambut anak kucing Anda dan beli juga gunting kuku kucing.</li>
                        <li className="my-1">Cat tree. Pohon dengan setidaknya dua cabang akan mendorong mereka bergerak dan menstimulasi mental.</li>
                    </ul>
                </div>

                <div className="my-5">
                    <h1 className="text-[#FF6C22] font-semibold font-poppins my-8">3.Makanan anak kucing terbaik untuk mulai diberikan</h1>
                    <p className="font-montserrat">Sistem pencernaan anak kucing masih sangat sensitif sehingga perubahan makanan secara mendadak bisa menyebabkan gangguan pencernaan dan bahkan membuat mereka tidak mau makan. Pada awalnya, yang terbaik adalah memberinya makanan yang sama dengan yang diberikan oleh pemilik sebelumnya. Memilih makanan yang tepat untuk anak kucing sangat penting karena akan menentukan kesehatan dan pertumbuhannya. Saat tumbuh, mereka membutuhkan keseimbangan nutrisi yang tepat di setiap tahap, termasuk protein, vitamin, dan mineral. Cara beralih ke makanan baru untuk anak kucing, Beberapa hari setelah kedatangan anak kucing, Anda akan dapat secara bertahap memperkenalkan mereka ke makanan baru. Saat beralih ke makanan baru, pastikan Anda memberikannya secara perlahan-lahan selama satu minggu. Panduan untuk mengganti makanan baru pada kucing:
                        Cara mengubah makanan kucing Anda
                        Yang terbaik adalah memperkenalkan makanan baru ke kucing Anda secara perlahan, selama setidaknya satu minggu. Dengan cara ini Anda dapat membantu menghindari sakit perut, neofobia, atau kecemasan lain pada kucing.
                        Mulailah dengan memperkenalkan makanan baru dalam jumlah kecil, kemudian sedikit demi sedikit tambah rasionya sampai kucing Anda benar-benar beralih ke makanan baru mereka.
                    </p>
                    <ul className="list-disc ml-10 my-3">
                        <li className="my-1">Hari 1 & 2 - 75% makanan sebelumnya + 25% makanan baru.</li>
                        <li className="my-1">Hari 3 & 4 - 50% makanan sebelumnya + 50% makanan baru</li>
                        <li className="my-1">Hari 5 & 6 - 25% makanan sebelumnya + 75% makanan baru</li>
                        <li className="my-1">Hari 7 - 100% makanan baru</li>
                    </ul>
                    <p className="my-1">Ada baiknya untuk mempertahankan rutinitas pemberian makan kucing yang teratur, ikuti waktu makan dan lingkungan makan yang sama untuk meminimalisir perubahan dan jaga kenyamanan kucing Anda selama proses transisi ke makanan baru.</p>
                </div>

                <div className="my-5">
                    <h1 className="text-[#FF6C22] font-semibold font-poppins my-8">4. Cek Kesehatan Sebelum Dibawa Pulang</h1>
                    <p className="font-montserrat">Persiapan lain yang diperlukan adalah melakukan pengecekan kesehatan. Sebelum dibawa pulang, penting untuk tahu kondisi kesehatan kucing. Sehingga teman-teman tidak sembarangan memberikan penanganan atau perawatan. Bila kucing mengalami masalah kutu, maka teman-teman harus bersihap untuk lebih rutin memandikan atau memberikan obat kutu.
                    </p>

                </div>
            </div>
            <Request bg={"../../img/bg2.png"} />
            <Footer logo="../../img/logo.png" bg={`url("../../img/bg.png")`} />
        </>
    )
}

export default Persiapan