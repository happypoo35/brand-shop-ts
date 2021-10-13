// import { lazy, Suspense } from "react";
// const Featured = lazy(() => import("./Featured"));
// const Hero = lazy(() => import("./Hero"));
// const Offers = lazy(() => import("./Offers"));
// const Features = lazy(() => import("../Features"));

// const Home = () => (
//   <Suspense fallback={<p>Loading...</p>}>
//     <Hero />
//     <Offers />
//     <Featured />
//     <Features />
//   </Suspense>
// );

import { Features } from "../";
import Featured from "./Featured";
import Hero from "./Hero";
import Offers from "./Offers";

const Home = () => (
  <>
    <Hero />
    <Offers />
    <Featured />
    <Features />
  </>
);

export default Home;
