import React from 'react';
import AnimalList from './AnimalList';
import AddAnimalForm from './AddAnimalForm';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import { v4 } from 'uuid';
import Header from './Header';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterAnimalList: {
        0: {
          latinName: 'Mustela Nivalis',
          commonName: 'Common Weasel',
          animalName: 'Wes Anderson',
          age: 5,
          diet: 'herbivore',
          housing: 'American Film Director Zone',
          caretakers: 0,
          sex: 'M',
          likes: 'all things twee',
          dislikes: 'terrible color palettes'
        },
        1: {
          latinName: 'Mustela Nivalis',
          commonName: 'Common Weasel',
          animalName: 'Wes Anderson',
          age: 5,
          diet: 'herbivore',
          housing: 'American Film Director Zone',
          caretakers: 0,
          sex: 'M',
          likes: 'all things twee',
          dislikes: 'terrible color palettes'
        }
      },
      selectedAnimal: null
      //masterAnimalList is an object instead of an array;
    };
    this.handleAddingNewAnimalToList = this.handleAddingNewAnimalToList.bind(this);
  }

  handleAddingNewAnimalToList(newAnimal){
    let newAnimalId = v4();
    let newMasterAnimalList = Object.assign({}, this.state.masterAnimalList, {
      [newAnimalId]: newAnimal
    });
    //{} is the TARGET, the object being created

    //this.state.masterAnimalList is the 1st SOURCE object, or the data to put into the TARGET; this one is a SLICE of state, the NEW animal to be piled on top of the existing animal list

    //{[newAnimalId: newAnimal]} is the 2nd SOURCE object that's a key-value pair
    this.setState({masterAnimalList: newMasterAnimalList});
  }

  handleDeletingSelectedAnimal(animalId){
    this.setState({selectedAnimal: animalId});
  }

  render() {
    return (
      <div>
        <style jsx global>{
          `
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: 'Arial Black', sans-serif;
            width: 100%;
            background-color: #9b0812;
            color: #fad605;
          }
          `
        }</style>
        <Header />
        <Switch>
          <Route exact path='/' render={()=><AnimalList animalList={this.state.masterAnimalList} />} />
          //here I'm providing masterAnimalList as a prop to AnimalList
          //access the list by calling this.state.masterAnimalList (it's now a state value)
          //prop is 'animalList' in AnimalList and state value is called 'masterAnimalList' in App
          <Route path='/addanimalform' render={()=><AddAnimalForm onNewAnimalCreation= {this.handleAddingNewAnimalToList} onAnimalSelection={this.handleDeletingSelectedAnimal} selectedAnimal={this.state.selectedAnimal} />} />

          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}


export default App;
