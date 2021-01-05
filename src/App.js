
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchPages from './pages/SearchPages';


function App() {
  return (
    <div className="app">

      <Router>
        <Switch>
          <Route path="/search">
            <SearchPages/>
          </Route>

          <Route path="/">
          <Home/>
          </Route>
        </Switch>
      </Router>


    


    </div>
  );
}

export default App;
