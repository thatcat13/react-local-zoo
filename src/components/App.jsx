import React from 'react';
import AnimalList from './AnimalList';
import AddAnimalForm from './AddAnimalForm';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterAnimalList: {}
    }
    this.handleAddingNewAnimalToList = this.handleAddingNewAnimalToList.bind(this);
  }

  handleAddingNewAnimalToList(newAniml){
    let newAnimalId = v4()
    let newMasterAnimalList = Object.assign({}, this.state.masterAnimalList, {
      [newAnimalId]: newAnimal
    });
    this.setState({masterTicketList: newMasterTicketList});
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
        <Switch>
          <Route exact path='/' render={()=><AnimalList animalList={this.state.masterAnimalList} />} />
          //here I'm providing masterAnimalList as a prop to AnimalList
          //access the list by calling this.state.masterAnimalList (it's now a state value)
          //prop is 'ticketList' in TicketList and state value is called 'masterTicketList' in App
          <Route path='/addanimalform' render={()=><AddAnimalForm onNewAnimalCreation={this.handleAddingNewAnimalToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
