import './App.css';
import Game from './Components/Game'
import Home from './Components/Home'
import Options from './Components/Options'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {PlayerProvider} from './Components/PlayerContext'

//React Routes

function App() {
  return (
    <PlayerProvider>                     
    <div>
      <Router>
        <Switch>
            <Route exact path="/">
                  <Home />
            </Route>
            <Route path="/gameoptions">
                  <Options />
            </Route>
            <Route path="/game">
                  <Game />
            </Route>
          </Switch>
        </Router>
    </div>
    </PlayerProvider>
  );
}

export default App;
