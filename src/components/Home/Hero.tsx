const Hero = () => (
  <section className="bg-lightPink mb-16 md:h-80">
    <div className="max-w-screen-2xl mx-auto h-full grid grid-cols-2 md:grid-cols-1 place-items-center">
      <div className="md:hidden">
        <img
          src="./data/images/img-hero.webp"
          alt="img"
          className="max-w-full"
        />
      </div>
      <div className="flex items-center place-self-start self-center pr-8 md:pr-0 md:place-self-center">
        <div className="h-20 mr-4 w-3 bg-accent"></div>
        <h1 className="text-5xl font-black text-darkGray uppercase flex flex-col sm:text-4xl">
          the brand
          <span className="text-3xl font-bold mt-1 whitespace-nowrap lg:text-2xl sm:text-xl">
            of luxerious <span className="text-accent">fashion</span>
          </span>
        </h1>
      </div>
    </div>
  </section>
);

export default Hero;
