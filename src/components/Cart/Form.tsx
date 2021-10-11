const inputs = ["Country", "City", "Postcode / Zip"];

const Form = () => (
  <form className="shipping-form">
    <h5 className="shipping-title">shipping address</h5>
    {inputs.map((el, id) => (
      <input key={id} type="text" placeholder={el} className="input" />
    ))}
    <button className="btn gray small">get a quote</button>
  </form>
);

export default Form;
