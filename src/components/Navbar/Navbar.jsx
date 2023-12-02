/* eslint-disable react/prop-types */
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = ({ logo = "img/logo.png" }) => {
    const location = useLocation();
    const [activeUrl, setActiveUrl] = useState(location.pathname);

    const navigation = [
        {
            url: "/aboutus",
            title: "Tentang Kami"
        },
        {
            url: "/services",
            title: "Pelayanan Kami"
        },
        {
            url: "/pet",
            title: "Peliharaan"
        }
    ];

    const handleClick = (url) => {
        setActiveUrl(url);
    };

    return (
        <>
            <div className="w-full fixed top-0 z-50 bg-white">
                <div className="mx-5 flex items-center justify-between">
                    <div>
                        <img src={logo} alt="" className="h-[77px] md:h-[125px]" />
                    </div>
                    <div>
                        <ul className="hidden md:flex font-medium font-poppins items-center gap-10 text-lg cursor-pointer">
                            {navigation.map((item) => (
                                <Link
                                    to={item.url}
                                    key={nanoid()}
                                    onClick={() => handleClick(item.url)}
                                >
                                    <li style={{ color: activeUrl === item.url ? 'red' : 'black' }}>
                                        {item.title}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                        <div className="text-black text-3xl md:hidden">
                            <RxHamburgerMenu className="h-[77px] " />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-[75px] md:mb-[120px]"></div>
        </>
    );
};

export default Navbar;
