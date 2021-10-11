import { ReactComponent as IconDelivery } from "../images/icon-delivery.svg";
import { ReactComponent as IconSale } from "../images/icon-sale.svg";
import { ReactComponent as IconQuality } from "../images/icon-quality.svg";

const featuresData = [
  {
    img: <IconDelivery />,
    title: "Free Delivery",
    text: "Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models.",
  },
  {
    img: <IconSale />,
    title: "Sales & discounts",
    text: "Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.",
  },
  {
    img: <IconQuality />,
    title: "Quality assurance",
    text: "Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models.",
  },
];

const Features = () => (
  <section className="features pad" aria-label="features">
    <div className="container">
      {featuresData.map((el, id) => {
        const { img, title, text } = el;
        return (
          <article className="feature" aria-label={title} key={id}>
            {img}
            <h5 className="light-gray">{title}</h5>
            <p className="light-gray">{text}</p>
          </article>
        );
      })}
    </div>
  </section>
);

export default Features;
