import { FaFacebookF } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
    return (
        <>
            <div className="bg-center bg-cover bg-no-repeat py-10" style={{ backgroundImage: `url("img/bg.png")` }}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between md:mx-3">
                    <div className="flec flex-col text-center my-3">
                        <span className="text-red  font-chewy text-3xl">Working Hours</span>
                        <ul className="list-disc list-inside font-montserrat mt-2 md:list-none">
                            <li >Monday - Sunday: 10 am - 9 pm</li>
                            <li >All holidays & school vacations</li>
                        </ul>
                    </div>
                    <div className="flec flex-col text-center my-3">
                        <span className="text-red  font-chewy text-3xl">Location</span>
                        <p className="font-montserrat mt-3">Happy Pet Care 151 Sutherland <br /> Rd.Brighton, MA </p>
                    </div>
                    <div className="flec flex-col text-center my-3">
                        <span className="text-red  font-chewy text-3xl">Contact</span>
                        <p className="font-montserrat mt-3">Got question? Call us </p>
                        <span className="font-montserrat font-bold text-2xl">617-608-3131</span>
                    </div>
                    <div className="flec flex-col text-center my-3">
                        <img src="img/logo.png" alt="logo" className="block mx-auto" />
                        <div className="flex flex-row text-5xl justify-center gap-3">
                            <FaFacebookF className="p-2 text-white bg-black rounded-full" />
                            <AiFillInstagram className="p-2 text-white bg-black rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer