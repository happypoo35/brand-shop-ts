import { Link } from "react-router-dom";
import { useOffersQuery } from "../../app/api";
import Spinner from "../../helpers/Spinner";

const Offers = () => {
  const { data, isLoading } = useOffersQuery();

  return (
    <section className="offers pad" aria-label="offers">
      {isLoading && <Spinner />}
      <div className="container">
        {data?.map((el) => {
          const { id, subtitle, title, img, route } = el;
          return (
            <Link key={id} to={route} className="offer">
              <article aria-label="offer">
                <img src={img} alt="img" className="offer-img" />
                <span className="offer-title">
                  {subtitle}
                  <br />
                  <span className="pink">{title}</span>
                </span>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Offers;
