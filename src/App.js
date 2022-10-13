import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Shop from './Pages/Shop/Shop/Shop';
import About from './Pages/About/About/About';
import DetailProduct from './Pages/Shared/DetailProduct/DetailProduct';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import Login from './Pages/Authentication/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import Register from './Pages/Authentication/Register/Register';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/shop">
            <Shop></Shop>
          </PrivateRoute>
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <PrivateRoute path="/detailProduct/:productId">
            <DetailProduct></DetailProduct>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
