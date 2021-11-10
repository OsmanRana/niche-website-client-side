
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider';
import UserDashboard from './Dashboard/UserDashboard/UserDashboard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home>
              </Home>
            </Route>
            <Route exact path="/home">
              <Home>
              </Home>
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
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
