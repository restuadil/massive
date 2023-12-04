import Footer from "../../../components/Footer/Footer"
import Navbar from "../../../components/Navbar/Navbar"
import Request from "../../../components/Request/Request"

const Pemahaman = () => {
    return (
        <>
            <Navbar logo="../../img/logo.png" />
            <div className="my-10 flex flex-row justify-between items-center mx-32 gap-5">
                <h1 className="font-chewy text-5xl text-left text-[#FF6C22]">Apa yang harus di pertimbangkan sebelum memelihara kucing</h1>
                <img src="../../../img/homevisit.png" alt="" className="w-[500px] " />
            </div>
            <div>
                <h1 className="font-poppins font-bold text-2xl text-center">Perilaku Kucing: Pahami Bahasa Tubuh & Emosi Kucing Anda</h1>
                <span className="text-red text-lg text-center my-1 block font-poppins">Ingatlah bahwa penting baginya untuk bisa mengendalikan nalurinya. Jika dia ingin waktu sendiri, pastikan Anda punya ruang untuknya.</span>

                <div className="my-5 flex items-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1574063413132-354db9f190fd?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', width: '100%', height: '500px' }}>
                    <div className="bg-slate-200 w-[600px] min-h-max p-5 rounded-lg ml-16 ">
                        <p className="font-montserrat">Kucing adalah salah satu hewan peliharaan  terbaik.
                            Namun sebelum  membawa pulang teman menggemaskan ini, pastikan  Anda memahami bahasa tubuh dan perilakunya, karena ini akan membantu Anda berkomunikasi  lebih baik dengan teman tercinta Anda  saat dia kembali menjadi bagian dari keluarga Anda.
                            Hal ini akan memudahkan Anda dan kucing untuk menyesuaikan diri dengan suasana baru dan satu sama lain.
                            Banyak orang mengira kucing tidak ekspresif atau emosional seperti anjing, padahal kucing punya cara berkomunikasinya sendiri.
                            Misalnya, tahukah Anda kalau kucing hanya mengeong pada manusia?
                            Jadi, ketika sahabat  Anda  mengeong ke arah Anda atau  di sekitar Anda, itu artinya dia sedang “berkomunikasi” dengan Anda.
                            Yang perlu Anda lakukan adalah memahami teman tercinta Anda. Yuk, simak panduan memahami perilaku kucing:
                        </p>
                    </div>
                </div>

            </div>

            <div className="mx-32 font-montserrat">
                <div className="my-10">
                    <h1 className=" text-2xl font-medium my-2">PERILAKU <span className="text-[#FF6C22]">KUCING</span></h1>
                    <p className="text-justify">Memahami perilaku kucing dan mempelajari bagaimana cara berkomunikasi dengan kucing akan membantu Anda untuk mengetahui apa yang ingin disampaikan oleh sahabat berkaki empat Anda itu kepada Anda. Meskipun kucing memiliki cara yang sangat lucu untuk mengekspresikan diri, namun terkadang perilaku mereka benar-benar aneh. Ketika kucing emosional Anda menjilati Anda, memperlihatkan perut mereka kepada Anda, mendengkur, dan meremas dengan cakar mereka, Anda akan merasa awwwwww dengan kelucuan mereka, membuat Anda menjadi sangat terdorong untuk memeluk dan memanjakan mereka.</p>
                    <br />
                    <p className="text-justify">Namun, ekspresi kita akan cepat berubah menjadi oh tidak! ketika mereka menjatuhkan barang-barang, menggaruk perabot rumah, kencing dan membuang kotoran di luar kotak pasir, membawa hewan mati atau mainan dari luar, atau mulai berkicau. Perilaku umum lainnya adalah ketika sahabat kesayangan Anda menggesekkan badan mereka pada segala permukaan atau pada Anda, suatu prilaku penandaan wilayah. Bahkan Anda mungkin juga pernah memperhatikan kucing Anda sedang makan rumput! Anda bisa bertanya mengapa mereka mencari rumput setelah melahap semua makanan lezat yang sudah Anda berikan kepada mereka? Adapun, prilaku ini sebenarnya membantu menenangkan perut mereka ketika mereka sedang mengalami masalah pencernaan.</p>
                </div>
                <div className="my-10">
                    <h1 className=" text-2xl font-medium my-2">EMOSI PADA <span className="text-[#FF6C22]">KUCING</span></h1>
                    <p className="text-justify">Anda pasti akan merasa terkejut  mengetahui bahwa  kucing memiliki  emosi yang kuat dan  tidak takut untuk menunjukkannya.
                        Baru-baru ini, banyak penelitian telah dilakukan untuk meneliti emosi pada kucing, dan kami berharap dapat memperoleh lebih banyak informasi tentang misteri ini di tahun-tahun mendatang.
                        Mereka tidak hanya mampu  sangat mencintai Anda, tetapi Anda juga harus percaya bahwa sahabat  Anda juga mampu merasakan kebahagiaan, ketakutan, depresi, kecemasan, dan kelegaan.
                        .</p>
                    <br />
                    <p className="text-justify">Kucing juga memiliki respons emosional yang kuat terhadap rasa sakit.
                        Sangat menarik untuk diketahui bahwa kucing memiliki kemampuan kognitif yang tinggi.
                        Sifat ini wajar dimiliki kucing rumahan karena mereka dapat mengenali perasaan dari pemilik mereka ataupun dari orang lain.
                        Ketika pemilik menunjukkan perilaku positif, maka kucing akan suka menghabiskan waktu bersama mereka dengan mendengkur dan menggosokkan tubuh mereka.
                        Sedangkan ketika pemilik mereka sedang marah atau kesal, sahabat kesayangan Anda ini akan menunjukkan stres mereka dengan mengarahkan telinga ke belakang dan bersembunyi.
                    </p>
                </div >
                <div className="my-5 flex justify-center items-center ">
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/P2NPRqofFkY`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="my-10">
                    <h1 className=" text-2xl font-medium my-2">BAHASA TUBUH <span className="text-[#FF6C22]">KUCING</span></h1>
                    <p className="text-justify">Bagaimana cara berkomunikasi dengan kucing dan memahami bahasa tubuh kucing adalah hal yang menarik untuk dipelajari. Kucing berkomunikasi menggunakan seluruh tubuh mereka, telinga, mata, suara, ekor, bulu, dan sebagainya. Anda hanya perlu memperhatikan sahabat berbulu kesayangan Anda dengan cermat untuk memahami apa yang ingin disampaikan mereka.</p>
                    <br />
                    <p className="text-justify">
                        Jilatan, dengkuran, mengeong dengan lembut, meremas, dan berbaring telentang dengan perut terbuka adalah indikasi yang jelas bahwa sahabat kesayangan Anda mempercayai Anda, menginginkan perhatian Anda dan mencintai Anda. Ini juga menunjukkan bahwa kucing Anda sedang bahagia dan menganggap Anda sebagai bagian dari keluarga mereka. And harus perhatikan ketika punggung dari sahabat kesayangan Anda melengkung dengan ekor yang terangkat tinggi dan menekankan kepala mereka kepada Anda, ini menunjukkan bahwa ia menginginkan pelukan dan kasih sayang! Kucing yang mendekam menunjukkan bahwa sahabat berkaki empat Anda itu merasa aman dan rileks karena itu adalah posisi tidur favorit mereka. Di sisi lain, desisan, bulu ekor terangkat, dan geraman adalah indikasi yang jelas dari ketakutan dan agresif mereka.
                    </p>
                </div>
            </div>
            <Request bg={"../../img/bg2.png"} />
            <Footer logo="../../img/logo.png" bg={`url("../../img/bg.png")`} />
        </>
    )
}

export default Pemahaman