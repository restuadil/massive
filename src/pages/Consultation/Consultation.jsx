import { useEffect, useState } from "react";
import CardDoctor from "../../components/Card/CardDoctor/CardDoctor";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { CgSearch } from "react-icons/cg";
import axios from "axios";
import { nanoid } from "nanoid";

const Consultation = () => {
  const [doctor, setDoctor] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [doctorsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        let apiUrl = "http://localhost:3000/api/veterinarians";

        // Menambahkan parameter pencarian jika ada nilai searchTerm
        if (searchTerm) {
          apiUrl += `?name=${searchTerm}`;
        }

        const response = await axios.get(apiUrl);
        setDoctor(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [searchTerm]);

  // Pagination logic
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctor.slice(indexOfFirstDoctor, indexOfLastDoctor);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar logo="../../img/logo.png" />
      <div className="flex flex-row justify-end mr-4 py-10">
        <div className="bg-slate-100 py-3 flex flex-row gap-1 items-center px-10 rounded-md border-slate-300 border-2">
          <label htmlFor="find"></label>
          <CgSearch className="text-2xl" />
          <input
            type="text"
            name="find"
            id="find"
            placeholder="Cari dokter"
            className="px-5 bg-transparent"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col mx-10 gap-3 my-10">
        {currentDoctors.map((doctor) => (
          <CardDoctor doctor={doctor} key={nanoid()} />
        ))}
      </div>
      {/* Pagination component */}
      <div className="flex justify-center gap-3 my-5">
        {Array.from(
          { length: Math.ceil(doctor.length / doctorsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`py-3 px-5 ${
                currentPage === index + 1 ? "bg-[#FF6C22]" : "bg-[#D9D9D9]"
              }`}
            >
              {index + 1}
            </button>
          ),
        )}
      </div>
      <Footer logo="../../img/logo.png" bg={`url("../../img/bg.png")`} />
    </>
  );
};

export default Consultation;
