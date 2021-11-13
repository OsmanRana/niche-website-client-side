
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider';
import AdminDashboard from './Dashboard/AdminDashboard/AdminDashboard';
import UserDashboard from './Dashboard/UserDashboard/UserDashboard';
import Explore from './Pages/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import PurchasePage from './Pages/Purchase/PurchasePage';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navigation/Navbar';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home>
              </Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/purchasePage/:id">
              <PurchasePage></PurchasePage>
            </PrivateRoute>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/login">
              <Login>
              </Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/userDashboard">
              <UserDashboard></UserDashboard>
            </Route>
            <Route path="/adminDashboard">
              <AdminDashboard></AdminDashboard>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
