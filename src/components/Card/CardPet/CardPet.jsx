/* eslint-disable react/prop-types */
import { TbCat, TbDog } from "react-icons/tb";
import { useLocation } from "react-router-dom";

const CardPet = ({ card }) => {
    const location = useLocation();

    const petType = location.pathname.split("/")[2];

    const imageUrl = `../../../../img/card${petType}.jpg`;

    return (
        <>
            <div className="flex flex-col w-[300px]  border-slate-300 border p-3  rounded-lg" >
                <img src={imageUrl} alt="" className="w-[350px]" />
                <div className="flex flex-row items-center gap-3 my-3">
                    {petType === "cat" ? <TbCat className="text-7xl" /> : <TbDog className="text-7xl" />}
                    <h2 className="font-bold font-poppins">{card}</h2>
                </div>
                <span><button className="underline mt-3">Baca Selengkapnya</button></span>
            </div>
        </>
    );
};

export default CardPet;
