/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import RatingStars from "../UI/Star";
import { nanoid } from "nanoid";
import axios from "axios";

const Review = ({ bg }) => {
  //   const [currentData, setCurrentData] = useState(0);
  const [review, setReview] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/api/reviews");
        setReview(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <div
        className="my-10 py-10 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col">
          <h1 className="text-center font-bold font-poppins text-3xl">
            Review on Yelp 🥀
          </h1>
          {/* <div className="mx-10 text-center flex flex-col gap-2 max-h-[350px] md:hidden">
            <h2 className="text-red font-bold text-4xl">
              {review[currentData].rating}
            </h2>
            <RatingStars rating={review[currentData].rating} />
            <h2 className="font-bold font-poppins">
              {review[currentData].name}
            </h2>
            <p className="font-montserrat ">{review[currentData].review}</p>
          </div>
          <div className="flex justify-center mt-6 gap-2 md:hidden">
            {review.slice(0, 5).map((item, index) => (
              <button
                key={index}
                className={`p-3 rounded-full active:scale-110 ${
                  index === currentData ? "bg-slate-700" : "bg-slate-300 "
                }`}
                onClick={() => setCurrentData(index)}
              ></button>
            ))}
          </div> */}

          <div className="hidden md:flex  overflow-x-auto gap-7 max-w-full mx-10 mt-6 scroll-smooth">
            {review.map((item) => (
              <div
                className="w-[350px] flex-shrink-0 shadow-sm shadow-slate-400 p-4"
                key={nanoid()}
              >
                <img
                  src={item.img}
                  className="w-[300px] h-[300px] rounded-lg"
                />
                <div className="flex my-3 gap-3">
                  <div className="text-2xl font-poppins">
                    <p>{item.username}</p>
                    <RatingStars rating={5} />
                  </div>
                </div>
                <p className="font-montserrat tracking-wide text-justify">
                  {item.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
