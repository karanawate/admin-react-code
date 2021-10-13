import './App.css';
import Navbar from "./components/layouts/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Teacher from "./pages/Teacher";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Studentview from "./pages/Studentview";
import Edituser from "./pages/Edituser";
import View from "./pages/View";
import Adminlist from './pages/Adminlist';
import Login from './pages/Login';
import {BrowserRouter as Router,Route,Switch,Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact  path="/" component={Home} />
          <Route exact  path="/Login" component={Login} />
          <Route exact  path="Users" component={Users} />
          <Route exact  path="/Teacher" component={Teacher} />
          <Route exact  path="/teacher/:id"  component={Studentview} />
          <Route exact  path="/edit/:id"  component={Edituser} />
          <Route exact  path="/view"  component={View} />
          <Route exact  path="/admin-list"  component={Adminlist} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



