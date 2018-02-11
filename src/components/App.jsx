import React from 'react';
import Header from './Header';
import AnimalList from './AnimalList';
import AddAnimal from './AddAnimal';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <AnimalList />
      <AddAnimal />
      App is working!
      <Switch>
        <Route exact path='/' component={AnimalList} />
        <Route path='/AddAnimal' component={AddAnimal} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
