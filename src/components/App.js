import React from 'react';
import Login from './Login/Login';
import Registro from './Registro/Registro';
import Header from './Header/Header';
import List from './List/List';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
/*
function App() {
  return (
    <div className="App">
      <Login name="Lizette"/>
    </div>
  );
}

*/

function App() {
  const items = [
    { id: '1', name: 'Name 1', description: 'Description 1', value: 2 },
    { id: '2', name: 'Name 2', description: 'Description 2', value: 1 },
    { id: '3', name: 'Name 3', description: 'Description 3', value: 0 },
    { id: '4', name: 'Name 4', description: 'Description 4', value: 5 },
  ];


  return (

    
    <BrowserRouter>
      <Route component={Header} />
      <Route exact path="/" component={Login} />
      <Route path="/list" component={List} /> 
         </BrowserRouter>
  );
}

export default App;

