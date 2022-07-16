import './App.css';
import Navbar from "./components/layouts/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Teacher from "./Teacher";
import Home from "./Home";
import Users from "./Users";
import Studentview from "./Studentview";
import Edituser from "./Edituser";
import Practise from "./Practise";
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
          <Route exact  path="/teacher/:id"  component={Studentview} />
          <Route exact  path="/edit/:id"  component={Edituser} />
          <Route exact  path="/practise"  component={Practise} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;



