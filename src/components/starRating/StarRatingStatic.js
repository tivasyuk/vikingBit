import React from "react";
import './starRating.scss';

const StarRatingStatic = (props) => {
    return (
        <div className="star-rating star-rating-static">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (props.starsCount) ? "on" : "off"}
                    >
                        <span className="star">&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
};

export default StarRatingStatic;