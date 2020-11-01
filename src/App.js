import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Footer from './components/Footer';
import Header from './components/Header';

const networks = [
  {
    "name": "linkedin",
    "url": "https://www.linkedin.com/in/john-edwards-15b638bb/",
    "className": "fa fa-linkedin"
  },
  {
    "name": "github",
    "url": "https://github.com/jodoedjr",
    "className": "fa fa-github"
  }
]

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={["/", "/home", "/index"]} component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
