import React from 'react';
import PropTypes from 'prop-types';

function AddAnimalForm(props) {
  let _latinName, _commonName, _animalName, _age, _diet, _housing, _caretakers, _sex, _likes, _dislikes = null;

  function handleNewAnimalFormSubmission(event) {
    event.preventDefault();
    props.onNewAnimalCreation({latinName: _latinName.value, commonName: _commonName.value, animalName: _animalName.value, age: _age.value, diet: _diet.value, housing: _housing.value, caretakers: _caretakers.value, sex: _sex.value, likes: _likes.value, dislikes: _dislikes.value, id: v4()});

    _latinName, _commonName, _animalName, _age, _diet, _housing, _caretakers, _sex, _likes, _dislikes = '';
  }
  //onNewAnimalCreation() is a PROP, guys (see below)--it references the handleAddingNewAnimalToList() callback from the App component.

  const addAnimalStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    border: '1px solid rgba(250, 214, 5, 0.5)',
    borderRadius: '4px',
    textShadow: '2px 2px #482e2f',
    padding: '30px',
    width: 'auto',
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column'
  };
  const labelStyles = {
    padding: 10,
  };
  const buttonStyles = {
    width: 70,
    height: 35,
    textAlign: 'center',
    marginTop: 10
  };

  return (
    <div style={addAnimalStyles}>
      <div>
        <h1>Add a New Fantastic Animal</h1>
      </div>
      <form onSubmit={handleNewAnimalFormSubmission}>
        <input
          type='text'
          id='latinName'
          placeholder='Latin Name'
          ref={(input) => {_latinName = input;}}/>
        <input
          type='text'
          id='commonName'
          placeholder='Common Name'
          ref={(input) => {_commonName = input;}}/>
        <input
          id='animalName'
          placeholder='Animal Name'
          ref={(input) => {_animalName = input;}}/>
        <input
          id='animalName'
          placeholder='Age'
          ref={(input) => {_age = input;}}/>
        <input
          id='animalName'
          placeholder='Diet'
          ref={(input) => {_diet = input;}}/>
        <input
          id='animalName'
          placeholder='Housing'
          ref={(input) => {_housing = input;}}/>
        <input
          id='animalName'
          placeholder='Number of Caretakers'
          ref={(input) => {_caretakers = input;}}/>
        <input
          id='animalName'
          placeholder='Sex'
          ref={(input) => {_sex = input;}}/>
        <input
          id='animalName'
          placeholder='Likes'
          ref={(input) => {_likes = input;}}/>
        <input
          id='animalName'
          placeholder='Dislikes'
          ref={(input) => {_dislikes = input;}}/>
        <button type='submit'>Add Fantastic Animal!</button>
      </form>
    </div>
  );
}

AddAnimalForm.propTypes = {
  onNewAnimalCreation: PropTypes.func
};

export default AddAnimalForm;
