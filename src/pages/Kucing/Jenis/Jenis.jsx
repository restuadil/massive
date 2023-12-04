import { nanoid } from "nanoid"
import Footer from "../../../components/Footer/Footer"
import Navbar from "../../../components/Navbar/Navbar"
import Request from "../../../components/Request/Request"

const Jenis = () => {
    const cat = [
        {
            type: "Persia",
            img: "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ0suktJEBOYsgOoqYzT-aO4ZmHdxrxVkiyXSmiPmazPwoaHJQtL1sX-sXcPdMldK_m",
            text: "Ras kucing Persia adalah salah satu jenis kucing yang paling populer di Indonesia. Kucing Persia memiliki bulu yang tebal dan lebat, dan biasanya berwarna putih atau abu-abu. Mereka memiliki wajah datar dan hidung pesek yang sangat menggemaskan. Kucing Persia dikenal sebagai kucing yang tenang, manis, dan suka beristirahat. Mereka sangat cocok untuk dijadikan hewan peliharaan dalam ruangan."
        },
        {
            type: "Siamese",
            img: "https://www.litter-robot.com/media/blog/alex-meier-siamese.jpg",
            text: "Siamese merupakan jenis kucing yang sangat elegan dan mempesona. Mereka memiliki bulu pendek dan lembut, dengan warna coklat atau hitam di sekitar wajah, telinga, dan kaki. Kucing Siamese sangat aktif dan cerdas, dan mereka suka bermain dengan pemiliknya. Mereka juga dikenal sebagai kucing yang sangat vokal dan suka berbicara dengan pemiliknya."
        },
        {
            type: "Scottish Fold",
            img: " https://i.pinimg.com/564x/3c/48/a0/3c48a0f16679c5a9578baac4511d8bd2.jpg ",
            text: "Scottish Fold adalah jenis kucing yang memiliki telinga kecil yang melipat ke depan, membuat mereka terlihat sangat lucu dan menggemaskan. Mereka memiliki bulu yang lembut dan tebal, dengan warna yang bervariasi. Kucing Scottish Fold sangat mudah bergaul dan cocok untuk menjadi hewan peliharaan di dalam rumah. Mereka juga dikenal sebagai kucing yang suka bermain dan aktif."
        },
        {
            type: "Maine Coon",
            img: " https://i.pinimg.com/564x/57/80/fd/5780fd73d7d71ef1ec2959ec891b2fa0.jpg ",
            text: "Maine Coon merupakan jenis kucing terbesar yang berasal dari Amerika Serikat. Mereka memiliki bulu yang lebat dan tebal, dan biasanya berwarna coklat atau hitam. Kucing Maine Coon sangat tenang dan mudah bergaul, dan mereka cocok untuk menjadi hewan peliharaan dalam rumah. Mereka juga sangat cerdas dan mudah dilatih."
        },
        {
            type: "Bengal",
            img: " https://i.pinimg.com/564x/ce/51/81/ce5181b54bf6c4ef263e599648bfc25e.jpg ",
            text: "Bengal adalah jenis kucing yang berasal dari Asia, dan mereka memiliki bulu yang sangat indah dengan corak yang menarik. Mereka sangat aktif dan suka bermain, dan mereka sangat cocok untuk menjadi hewan peliharaan bagi pemilik yang aktif dan suka berolahraga. Kucing Bengal juga sangat cerdas dan mudah dilatih."
        },
        {
            type: "Sphynx",
            img: " https://i.pinimg.com/564x/fd/79/65/fd7965e50bd41652c103cdf3baf69a85.jpg ",
            text: "Sphynx adalah jenis kucing yang sangat unik dan menarik. Mereka tidak memiliki bulu sama sekali, dan kulit mereka terlihat seperti kulit manusia. Kucing Sphynx sangat ramah dan suka bermain, dan mereka sangat cocok untuk menjadi hewan peliharaan dalam rumah. Mereka juga sangat pintar dan mudah dilatih."
        },
        {
            type: "Ragdoll",
            img: "https://i.pinimg.com/564x/43/17/d5/4317d54ef4d7dbad3b46ef5e3edb78db.jpg ",
            text: "Ragdoll adalah jenis kucing yang sangat tenang dan mudah bergaul. Mereka memiliki bulu yang lebat dan berwarna putih dengan corak yang menarik di sekitar wajah dan kaki. Kucing Ragdoll dikenal sebagai kucing yang sangat sabar dan penyayang, sehingga mereka sangat cocok untuk menjadi hewan peliharaan bagi keluarga yang memiliki anak kecil."
        },
        {
            type: "American Shorthair",
            img: " https://i.pinimg.com/736x/ee/87/03/ee870384dc86cd95c391ab505fbedd9e.jpg ",
            text: "American Shorthair adalah jenis kucing yang berasal dari Amerika Serikat. Mereka memiliki bulu yang pendek dan tebal, dengan warna yang bervariasi. Kucing American Shorthair sangat tenang dan mudah dirawat, sehingga mereka sangat cocok untuk menjadi hewan peliharaan bagi pemilik yang sibuk."
        },
        {
            type: "Bombay",
            img: " https://i.pinimg.com/564x/a0/58/fd/a058fd1fb7f838fca611edc859fc5086.jpg ",
            text: "Bombay adalah jenis kucing yang berasal dari Amerika Serikat, dan mereka memiliki bulu yang pendek dan berkilau. Kucing Bombay sangat aktif dan suka bermain, sehingga mereka sangat cocok untuk menjadi hewan peliharaan bagi pemilik yang suka berolahraga. Mereka juga sangat cerdas dan mudah dilatih."
        },
        {
            type: "Birman",
            img: "https://i.pinimg.com/564x/e5/2c/ca/e52cca7f396e405b61a7848d1a0845ce.jpg ",
            text: "Birman adalah jenis kucing yang berasal dari Myanmar, dan mereka memiliki bulu yang lebat dan tebal, dengan warna yang bervariasi. Kucing Birman sangat tenang dan penyayang, dan mereka cocok untuk menjadi hewan peliharaan dalam rumah. Mereka juga sangat ramah dan mudah bergaul."
        },
        {
            type: "Himalayan",
            img: "https://i.pinimg.com/564x/9e/c9/80/9ec980521a433c55a61c223abf9cc1a6.jpg ",
            text: "Himalayan adalah jenis kucing yang merupakan hasil persilangan antara kucing Persia dan kucing Siamese. Mereka memiliki bulu yang lebat dan tebal, dengan warna yang bervariasi. Kucing Himalayan sangat tenang dan manis, dan mereka cocok untuk menjadi hewan peliharaan dalam rumah."
        },
        {
            type: "British Shorthair",
            img: " https://i.pinimg.com/564x/f6/e0/6d/f6e06d06ce50c5301971937ca7c980ce.jpg ",
            text: "British Shorthair adalah jenis kucing yang berasal dari Inggris, dan mereka memiliki bulu yang pendek dan tebal, dengan warna yang bervariasi. Kucing British Shorthair sangat tenang dan mudah dirawat, sehingga mereka sangat cocok untuk menjadi hewan peliharaan bagi pemilik yang sibuk."

        },
        {
            type: "Devon Rex",
            img: " https://i.pinimg.com/564x/c4/71/55/c471551ef7499952bdd0b9a63588e6bb.jpg ",
            text: "Devon Rex adalah jenis kucing yang memiliki bulu keriting dan lebat. Mereka sangat aktif dan suka bermain, dan mereka cocok untuk menjadi hewan peliharaan bagi pemilik yang suka berolahraga. Kucing Devon Rex juga sangat ramah dan mudah bergaul"
        },
        {
            type: "Russian Blue",
            img: "https://i.pinimg.com/564x/45/c6/19/45c6199677f387081f66924fbf5d0b27.jpg ",
            text: "Russian Blue adalah jenis kucing yang berasal dari Rusia, dan mereka memiliki bulu yang pendek dan lembut dengan warna abu-abu. Kucing Russian Blue sangat tenang dan mudah dirawat, sehingga mereka sangat cocok untuk menjadi hewan peliharaan bagi pemilik yang sibuk."
        },
        {
            type: "Manx",
            img: "https://i.pinimg.com/564x/52/c1/17/52c117b3a0be523f315646175695a785.jpg ",
            text: "Manx adalah jenis kucing yang berasal dari Pulau Man, dan mereka tidak memiliki ekor sama sekali. Mereka memiliki bulu yang lebat dan tebal, dengan warna yang bervariasi. Kucing Manx sangat aktif dan cerdas, dan mereka cocok untuk menjadi hewan peliharaan bagi pemilik yang aktif dan suka berolahraga"
        },
    ]
    return (
        <>
            <Navbar logo="../../img/logo.png" />
            <div className="my-10 flex flex-row justify-between items-center mx-32 gap-5">
                <h1 className="font-chewy text-5xl text-left text-[#FF6C22]">Jenis-jenis kucing yang populer di Indonesia </h1>
                <img src="../../../img/homevisit.png" alt="" className="w-[500px]" />
            </div>
            <p className="font-montserrat mx-32 tracking-wider text-justify">Selain memberikan makanan yang tepat, ada beberapa cara merawat kucing agar tumbuh sehat. Yuk, simak bagaiamana cara memelihara danKucing merupakan hewan peliharaan yang sangat populer di Indonesia. Selain lucu dan menggemaskan, kucing juga dikenal sebagai hewan yang mudah dirawat dan bisa menjadi teman yang setia. Ada banyak jenis ras kucing yang populer di Indonesia, masing-masing dengan karakteristik yang berbeda. Di artikel ini, kami akan membahas beberapa jenis ras kucing yang paling populer di Indonesia. tips merawat kucing dengan baik berikut. Kucing merupakan hewan peliharaan yang disukai banyak orang karena menggemaskan. Meski bisa jadi teman baru di rumah, sayangnya tak semua orang bisa merawat kucing. Bukan hanya tempat tinggal dan makanan saja, kucing juga memerlukan perawatan agar tetap sehat.</p>
            <div className="mx-60 my-10">
                {
                    cat.map((item, index) => {
                        return (
                            <div key={nanoid()} className={`flex flex-row items-center gap-5 my-5 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                <img src={item.img} alt="" className="w-[250px]" />
                                <div>
                                    <h1 className="font-poppins font-bold my-3">{index + 1}.{item.type}</h1>
                                    <p className={`font-montserrat text-justify ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>{item.text}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <Request bg={"../../img/bg2.png"} />
            <Footer logo="../../img/logo.png" bg={`url("../../img/bg.png")`} />
        </>
    )
}

export default Jenis