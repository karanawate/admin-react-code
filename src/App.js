import './App.css';
import Navbar from "./components/layouts/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Teacher from "./Teacher";
import Home from "./Home";
import Users from "./Users";
import Studentview from "./Studentview";
import View from "./View"
import {BrowserRouter as Router,Route,Switch,Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact  path="/" component={Home} />
          <Route exact  path="Users" component={Users} />
          <Route exact  path="/Teacher" component={Teacher} />
          <Route exact  path="/View" component={View} />
          <Route        path="/teacher/:id"  component={Studentview} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



