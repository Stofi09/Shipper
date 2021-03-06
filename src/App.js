import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Order from "./components/Order";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Login from "./components/pages/LoginPage";
import EquipmentTable from './components/EquipmentTable';
import List from "./components/Lists";
import Register from "./components/Register";


/* Font awesome*/
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLock, faCheck, faMobile, faDatabase, faBell,  faShare, faCode, faCookie, faBatteryFull,faBatteryHalf, faBatteryEmpty } from '@fortawesome/free-solid-svg-icons'


library.add(fab,faLock,faCheck,faMobile, faDatabase , faBell,faShare,faCode, faCookie,faBatteryFull,faBatteryHalf, faBatteryEmpty );
function App() {
  return (
    <Router> 
    <div className="App">
        <Navbar/>
        <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" exact component={About} />
        <Route path="/order" exact component={Order} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/loginpage" exact component={Login} />
        <Route path="/EquipmentTable" exact component={EquipmentTable} />
        <Route path="/cards"/>
        <Route path="/lists" exact component={List}/>
        <Route path="/register" exact component={Register}/>
      </Switch>
    </div>
    </Router> 
  );
}

export default App;
