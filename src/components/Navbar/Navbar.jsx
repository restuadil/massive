/* eslint-disable react/prop-types */
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = ({ logo = "img/logo.png" }) => {
    const location = useLocation();
    const [dropdown, setDropdown] = useState(null); // State untuk menangani dropdown

    const navigation = [
        {
            url: "/aboutus",
            title: "Tentang Kami",
            link: [
                {
                    url: "/aboutus",
                    title: "Why Pet Care"
                },
                {
                    url: "/aboutus/gallery",
                    title: "Gallery"
                }
            ]
        },
        {
            url: "/services",
            title: "Pelayanan Kami",
            link: [
                {
                    url: "/services",
                    title: "Services"
                },
                {
                    url: "/services/vaccineform",
                    title: "Vaksinasi"
                },
                {
                    url: "/services/consultation",
                    title: "Konsultasi"
                },
                {
                    url: "/services/homevisit",
                    title: "Home Visit"
                }
            ]
        },
        {
            url: "/pet",
            title: "Peliharaan",
            link: [
                { url: "/pet/cat", title: "Kucing" },
                { url: "/pet/dog", title: "Anjing" }
            ]
        }
    ];

    const handleClick = (url) => {
        if (dropdown === url) {
            // Jika dropdown yang sedang aktif di-klik lagi, tutup dropdown
            setDropdown(null);
        } else {
            // Jika dropdown belum aktif, buka dropdown
            setDropdown(url);
        }
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
                                <li key={nanoid()} className="relative">
                                    <div
                                        onClick={() => handleClick(item.url)}
                                        style={{ color: location.pathname.includes(item.url) && item.url ? 'red' : 'black' }}
                                    >
                                        {item.title}
                                    </div>
                                    {item.link && item.link.length > 0 && dropdown === item.url && (
                                        <ul className="ml-4 absolute -left-5 bg-white shadow-lg flex-col w-40 min-h-max py-3 text-left pl-3 rounded-md">
                                            {item.link.map((subItem) => (
                                                <li key={nanoid()}>
                                                    <Link
                                                        className={`text-black hover:text-red ${location.pathname.includes(subItem.url) && subItem.url ? 'text-red' : ''}`}
                                                        to={subItem.url}
                                                    >
                                                        {subItem.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
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
