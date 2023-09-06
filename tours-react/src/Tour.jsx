import { useState } from "react";

const Tour = ({ id, name, image, price, info, removeTour }) => {
  const [fullText, setFullText] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {fullText ? info : `${info.substring(0, 200)}...`}
          <button
            type="button"
            className="info-btn"
            onClick={() => {
              setFullText(!fullText);
            }}
          >
            {fullText ? `show less` : `read more`}
          </button>
        </p>
        <button
          className="delete-btn btn-block btn"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
