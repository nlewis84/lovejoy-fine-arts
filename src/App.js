import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Event from './components/Event';
import SingleTeacher from './components/SingleStaff';
import Staff from './components/Staff';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SingleEvent from './components/SingleEvent';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SingleTeacher} path="/staff/:slug" />
        <Route component={Staff} path="/staff" />
        <Route component={SingleEvent} path="/event/:slug" />
        <Route component={Event} path="/event" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
