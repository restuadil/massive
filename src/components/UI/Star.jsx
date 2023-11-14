/* eslint-disable react/prop-types */
import { FaStar } from 'react-icons/fa';

const RatingStars = ({ rating }) => {
    const roundedRating = Math.round(rating);

    return (
        <div className="flex items-center justify-center">
            {Array.from({ length: roundedRating }, (_, index) => (
                <FaStar key={index} className="h-5 w-5 text-yellow-500" />
            ))}
        </div>
    );
};

export default RatingStars;
