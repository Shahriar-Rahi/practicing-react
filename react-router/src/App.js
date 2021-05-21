import './App.css';
import Nav from './Nav'
import About from './About'
import Character from './Character'
import CharacterDetail from './CharacterDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>

      <div className="App">
        <Nav />
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/character" exact component={Character} />
          <Route path="/character/:id"  component={CharacterDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default App;
