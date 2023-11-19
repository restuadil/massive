import { nanoid } from "nanoid"
import { dataVaksinKucing } from "../../Utils/dataVaksinKucing"
const Vaccine = () => {
    return (
        <>
            <div className="py-3">
                <h1 className="font-bold font-poppins text-3xl text-center">Dosis Vaksin Kucing</h1>
                <div className="flex flex-row">
                    {dataVaksinKucing.map((item) => {
                        return (
                            <div key={nanoid()}>
                                <h2>{item.range}</h2>
                                <ul className="list-disc list-inside">
                                    {item.vaksin.map((vaksinItem, index) => (
                                        <li key={index}>{vaksinItem}</li>
                                    ))}
                                </ul>
                                <span>{item.title}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Vaccine