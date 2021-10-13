import { useOffersQuery } from "../../app/api";
import { useHistory } from "react-router-dom";
import Spinner from "../../helpers/Spinner";
import { useRef, useState } from "react";

const Offers = () => {
  const [count, setCount] = useState(0);
  const { data, isLoading } = useOffersQuery();
  const imgRef = useRef<HTMLImageElement>(null);
  const history = useHistory();

  const isLoaded = count === data?.length;

  const handleLoadImg = () => {
    setCount(count + 1);
  };

  return (
    <section className="offers pad" aria-label="offers">
      <div className="container">
        {data?.map((el) => {
          const { id, subtitle, title, img, route } = el;
          return (
            <article
              key={id}
              aria-label="offer"
              className={!isLoaded ? "offer loading" : "offer"}
              onClick={() => history.push(route)}
            >
              <img
                src={img}
                alt="img"
                className="offer-img"
                ref={imgRef}
                onLoad={handleLoadImg}
              />
              <span className="offer-title">
                {subtitle}
                <br />
                <span className="pink">{title}</span>
              </span>
            </article>
          );
        })}
        {(isLoading || !isLoaded) &&
          [1, 2, 3, 4].map((el) => (
            <article key={el} aria-label="offer" className="offer skeleton">
              <Spinner />
            </article>
          ))}
      </div>
    </section>
  );
};

export default Offers;
