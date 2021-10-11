import { BsArrowRight } from "react-icons/bs";

const Form = () => (
  <form className="registration-form" onSubmit={(e) => e.preventDefault()}>
    <span className="form-label">Your Name</span>
    <input className="input" type="text" placeholder="First Name" />
    <input className="input" type="text" placeholder="Last Name" />
    <div className="radio-container">
      <label className="radio-btn">
        Male
        <input type="radio" name="gender" id="male" />
        <span className="custom-radio"></span>
      </label>
      <label className="radio-btn">
        Female
        <input type="radio" name="gender" id="female" />
        <span className="custom-radio"></span>
      </label>
    </div>
    <span className="form-label">Login details</span>
    <input className="input" type="email" placeholder="Email" />
    <input className="input" type="password" placeholder="Password" />
    <label className="password-label" htmlFor="password">
      Please use 8 or more characters, with at least 1 number and a mixture of
      uppercase and lowercase letters
    </label>
    <button type="submit" className="btn btn-join">
      join now
      <BsArrowRight />
    </button>
  </form>
);

export default Form;
