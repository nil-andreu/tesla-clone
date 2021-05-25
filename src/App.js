import React, {useState} from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './components/Header/Header.jsx'
import HeaderBlock from './components/HeaderBlock/HeaderBlock';

function App() {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <Router>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} /> 
      <HeaderBlock />   

      <Switch>
        <Route path="/"/>

      </Switch>
    </Router>

  );
}

export default App;
