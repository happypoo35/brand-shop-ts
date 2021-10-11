import { Link } from "react-router-dom";

const Error = () => (
  <section className="error-page pad">
    <div className="container">
      <span className="error-code">404</span>
      <h2 className="empty-title">This page doesn't exist</h2>
      <Link to="/">
        <button className="btn gray">home page</button>
      </Link>
    </div>
  </section>
);

export default Error;
