import './App.css';
import ExploreProducts from './Pages/ExploreProducts/ExploreProducts';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetails from './Pages/Home/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/exploreProducts">
            <ExploreProducts></ExploreProducts>
          </Route>
          <Route path="/products/:id">
            <ProductDetails></ProductDetails>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
