import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Cart,
  Catalog,
  Cta,
  Error,
  Footer,
  Header,
  Home,
  Product,
  Registration,
} from "./components";
import ScrollToTop from "./helpers/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="wrapper">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/catalog" component={Catalog} />
            <Route exact path="/catalog/:gender" component={Catalog} />
            <Route path="/catalog/:gender/:cat" component={Catalog} />
            <Route exact path="/product/:id" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/registration" component={Registration} />
            <Route path="*" component={Error} />
          </Switch>
        </main>
        <Cta />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
