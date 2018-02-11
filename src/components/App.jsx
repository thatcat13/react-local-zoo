import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import AnimalList from './AnimalList';
import AddAnimal from './AddAnimal';


function App() {
  return (
    <div>
      <Header />
      <AnimalList />
      <AddAnimal />
      App is working!
      <Switch>
      </Switch>
    </div>
  );
}

export default App;
