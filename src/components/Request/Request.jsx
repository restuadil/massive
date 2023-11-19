/* eslint-disable react/prop-types */
const Request = ({ bg }) => {
    return (
        <>
            <div style={{ backgroundImage: `url(${bg})` }} className="bg-center bg-cover bg-no-repeat ">
                <div className="flex items-center py-10 md:justify-center">
                    {/* <img src="img/imagebg2.png" alt="" className="w-1/2 " /> */}
                    <div>
                        <h1 className="text-center font-poppins font-bold text-2xl text-white mx-1">Siap menggunakan layanan kami?</h1>
                        <button className="font-chewy text-2xl block mx-auto px-7 py-1 rounded-2xl mt-7  bg-primary">Layanan Permintaan</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Request