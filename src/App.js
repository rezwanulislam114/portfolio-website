import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Pages/Home/Home';
import SkillPage from './Components/Pages/Skills/SkillPage';
import BarLoader from "react-spinners/BarLoader";

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])
  const override = {
    display: 'block',
    width: '100%',
  };

  return (
    <div className="app">
      {
        loading ?
          <BarLoader color={'rgb(226, 101, 43)'} loading={loading} css={override} size={150} />
          :
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
              <Route path="/about">
                <About></About>
              </Route>
            </Switch>
          </BrowserRouter>
      }
    </div>
  );
}

export default App;
