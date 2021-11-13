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
import Page404 from './Pages/Home/Page404/Page404';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <Page404></Page404>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
