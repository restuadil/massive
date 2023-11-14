import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
    return (
        <>
            <div className="w-full fixed top-0 z-50 bg-white">
                <div className="mx-5 flex items-center justify-between ">
                    <div>
                        <img src="img/logo.png" alt="" className="h-[77px] md:h-[125px]" />
                    </div>
                    <div>
                        <ul className="hidden md:flex font-medium font-poppins items-center gap-10 text-lg">
                            <li>Tentang Kami</li>
                            <li>Pelayanan Kami</li>
                            <li>Peliharaan</li>
                            <li>
                                <button className="text-white bg-red py-2 px-6 rounded-3xl shadow-md shadow-slate-500">Masuk</button>
                            </li>
                        </ul>
                        <div className="text-black text-3xl md:hidden">
                            <RxHamburgerMenu className="h-[77px] "/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-[75px] md:mb-[120px]"></div>
        </>
    )
}

export default Navbar
