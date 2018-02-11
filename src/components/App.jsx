import React from 'react';
import ReactDOM from "react-dom";
import Header from './Header';
import AnimalList from './AnimalList';
import AddAnimal from './AddAnimal';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';


function App() {
  return (
    <div>
      <style jsx global>{`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: 'Arial Black', sans-serif;
            width: 100%;
          }
          `}</style>
      <Header />
      App is working!
      <Switch>
        <Route exact path='/' component={AnimalList} />
        <Route path='/addanimal' component={AddAnimal} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
