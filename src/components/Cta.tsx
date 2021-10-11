const Cta = () => (
  <section className="cta pad" aria-label="subscribe">
    <img src="./data/images/footer-bg.jpg" alt="img" className="footer-bg" />
    <div className="container">
      <article className="testimonial" aria-label="testimonial">
        <div className="avatar">
          <img src="./data/images/avatar.png" alt="avatar" />
        </div>
        <p className="testimonial-text">
          “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar
          purus condimentum“
        </p>
      </article>
      <article className="subscribe">
        <h3>
          subscribe
          <br />
          <span>for our newsletter and promotion</span>
        </h3>
        <form action="/">
          <input
            className="input-subscribe"
            type="email"
            autoComplete="off"
            placeholder="Enter Your Email"
            aria-label="email"
          />
          <button className="btn-submit" type="submit">
            Subscribe
          </button>
        </form>
      </article>
    </div>
  </section>
);

export default Cta;
