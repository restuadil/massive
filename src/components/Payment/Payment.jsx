import { nanoid } from "nanoid"

const Payment = () => {
    const payment = ["mandiri", "bni", "bca", "bri", "jcb", "permata"]
    return (
        <>
            <div className="text-[#F69946] font-chewy text-3xl text-center">
                <h1 className="my-5">Metode Pembayaran</h1>
                <div className="grid grid-cols-3 gap-4 justify-center items-center mt-5">
                    {payment.map((payment) => (
                        <img
                            key={nanoid()}
                            src={`../../../public/img/${payment}.png`}
                            alt={payment}
                            className="mx-auto"
                        />
                    ))}
                </div>
            </div>

        </>
    )
}

export default Payment