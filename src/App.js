import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Event from './components/Event';
import SingleTeacher from './components/SingleTeacher';
import Teachers from './components/Teachers';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SingleTeacher} path="/teacher/:slug" />
        <Route component={Teachers} path="/teachers" />
        <Route component={Event} path="/event" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
