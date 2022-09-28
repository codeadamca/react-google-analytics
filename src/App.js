import './App.css';

import {BrowserRouter, Switch, Link} from 'react-router-dom';
import {Page} from './extensions/Page';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {  
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>React Google Analytics Sample</h1>
        </header>
        <nav>
          <Link to="/">Home</Link>
          <span> | </span>
          <Link to="/about">About Me</Link>
          <span> | </span>
          <Link to="/contact">Contact</Link>
        </nav>
        <main>
          <Switch>

            <Page exact path="/" component={Home} title="Home"></Page>
            <Page path="/about" component={About} title="About Me"></Page>
            <Page path="/contact" component={Contact} title="Contact"></Page>
          
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
