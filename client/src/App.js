import React from 'react';
import './App.css';
import Main from './components/Main';
import Info from './components/Info';
import Boxes from './components/Boxes';
import BoxForm from './components/BoxForm';
import Navbar from './components/Navbar';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
       <div className="App">
          <Navbar/>

          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/boxes' component={Boxes} />
            <Route exact path='/box/new' component={BoxForm} />
            <Route exact path='/info' component={Info} />
          </Switch>
      </div> 
  );
}

export default App;
