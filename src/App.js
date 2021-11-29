import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import SkillPage from './Components/Pages/Skills/SkillPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/skills">
            <SkillPage></SkillPage>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
