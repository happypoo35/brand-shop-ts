import { Select } from "../";
import Filter from "./Filter";

const selects = [
  {
    title: "gender",
    options: ["men", "women", "kids"],
  },
  {
    title: "size",
    options: ["xs", "s", "m", "l", "xl"],
  },
  {
    title: "price",
    options: ["10$ - 20$", "20$ - 50$", "50$ - 100$", "> 100$"],
  },
];

const Filters = () => (
  <section className="filters pad">
    <div className="container">
      <Filter />
      <div className="selects">
        {selects.map((el, id) => (
          <Select key={id} {...el} />
        ))}
      </div>
    </div>
  </section>
);

export default Filters;
