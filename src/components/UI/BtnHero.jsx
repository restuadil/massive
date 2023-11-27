/* eslint-disable react/prop-types */
const BtnHero = ({ btnContent }) => {
    return (
        <>
            <button className="text-white bg-red py-2 px-6 rounded-3xl shadow-md shadow-slate-500 w-max ">
                <div className="flex gap-2 items-center justify-center w-max">
                    <img src="img/pow.png" alt="" />
                    <p className="font-chewy">{btnContent}</p>
                </div>
            </button>
        </>
    )
}

export default BtnHero