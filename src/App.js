import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Categories from './Categories';
import NewArrival from './NewArrival';
import Discount from './Discount';
import Footer from './Footer';
import BestSeller from './BestSeller';
import Testimonials from './Testimonials';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CategoriesShop from './CategoriesShop';
import Recommend from './Recommend';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Checkout from './Checkout';
import SearchShop from './SearchShop';
import PathHero from './PathHero';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="fashionApp">
          <header>
            <Navbar />
          </header>
          <Switch>
            <Route exact path="/">
              <Hero />
              <Categories />
              <NewArrival />
              <Discount />
              <BestSeller title="Best Seller" />
              <Testimonials />
            </Route>
            <Route exact path="/Shop">
              <PathHero path="Home->Shop" page="Shop"/>
              <CategoriesShop />
              <Discount />
              <Recommend />
            </Route>
            <Route exact path="/Shop2">
              <PathHero path="Home->Shop" page="Shop"/>
              <SearchShop />
              <Recommend />
            </Route>
            <Route exact path="/product">
              <PathHero path="Home->Product" page="Product"/>
              <ProductDetails />
              <Testimonials />
              <BestSeller title="Related Items" />
            </Route>
            <Route exact path="/cart">
              <PathHero path="Home->Shopping Bag" page="Shopping Bag"/>
              <Cart />
              <Checkout />
              <BestSeller title="Related Items" />
            </Route>
          </Switch>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
