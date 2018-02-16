import React from 'react';
import PropTypes from 'prop-types';

function AddAnimalForm(props) {
  let _latinName, _commonName, _animalName, _age, _diet, _housing, _caretakers, _sex, _likes, _dislikes = null;

  function handleNewAnimalFormSubmission(event) {
    event.preventDefault();
    props.onNewAnimalCreation({latinName: _latinName.value, commonName: _commonName.value, animalName: _animalName.value, age: _age.value, diet: _diet.value, housing: _housing.value, caretakers: _caretakers.value, sex: _sex.value, likes: _likes.value, dislikes: _dislikes.value});

    _latinName.value = '';
    _commonName.value = '';
    _animalName.value = '';
    _age.value = '';
    _diet.value = '';
    _housing.value = '';
    _caretakers.value = '';
    _sex.value = '';
    _likes.value = '';
    _dislikes.value = '';
  }
  //onNewAnimalCreation() is a PROP, guys (see below)--it references the handleAddingNewAnimalToList() callback from the App component.

  const addAnimalStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    textAlign: 'center',
    border: '1px solid rgba(250, 214, 5, 0.5)',
    borderRadius: '4px',
    textShadow: '2px 2px #482e2f',
    padding: '30px',
    width: 'auto',
    marginTop: '50px'
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center'
  };
  const labelStyles = {
    padding: 10,
    fontSize: '1em'
  };
  const buttonStyles = {
    width: 200,
    height: 50,
    textAlign: 'center',
    marginTop: 10,
    fontSize: '1em',
    fontWeight: 'bolder',
    alignSelf: 'center'
  };

  return (
    <div style={addAnimalStyles}>
      <div>
        <h1>Add a New Fantastic Animal</h1>
      </div>
      <form style={formStyles} onSubmit={handleNewAnimalFormSubmission}>
        <input style={labelStyles}
          type='text'
          id='latinName'
          placeholder='Latin Name'
          ref={(input) => {_latinName = input;}}/>
        <input style={labelStyles}
          type='text'
          id='commonName'
          placeholder='Common Name'
          ref={(input) => {_commonName = input;}}/>
        <input style={labelStyles}
          id='animalName'
          placeholder='Animal Name'
          ref={(input) => {_animalName = input;}}/>
        <input style={labelStyles}
          id='animalName'
          placeholder='Age'
          ref={(input) => {_age = input;}}/>
        <input style={labelStyles}
          id='animalName'
          placeholder='Diet'
          ref={(input) => {_diet = input;}}/>
        <input style={labelStyles}
          id='animalName'
          placeholder='Housing'
          ref={(input) => {_housing = input;}}/>
        <input style={labelStyles}
          id='animalName'
          placeholder='Number of Caretakers'
          ref={(input) => {_caretakers = input;}}/>
        <input style={labelStyles}
          id='animalName'
          placeholder='Sex'
          ref={(input) => {_sex = input;}}/>
        <input style={labelStyles}
          id='animalName'
          placeholder='Likes'
          ref={(input) => {_likes = input;}}/>
        <input style={labelStyles}
          id='animalName'
          placeholder='Dislikes'
          ref={(input) => {_dislikes = input;}}/>
        <button style={buttonStyles} type='submit'>Add Fantastic Animal!</button>
      </form>
    </div>
  );
}

AddAnimalForm.propTypes = {
  onNewAnimalCreation: PropTypes.func
};

export default AddAnimalForm;
