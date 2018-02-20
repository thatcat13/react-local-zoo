import React from 'react';
import PropTypes from 'prop-types';

function Animal(props){
  const animalListStyle = {
    listStyle: 'none',
    padding: 0
  };


  const animalInformation =
    <div>
      <ul style={animalListStyle}>
        <li>Latin Name: {props.latinName}</li>
        <li>Common Name: {props.commonName}</li>
        <li>Animal Name: {props.animalName}</li>
        <li>Age: {props.age}</li>
        <li>Diet: {props.diet}</li>
        <li>housing: {props.housing}</li>
        <li>Caretakers: {props.caretakers}</li>
        <li>Sex: {props.sex}</li>
        <li>Likes: {props.likes}</li>
        <li>Dislikes: {props.dislikes}</li>
        <button onClick={function() {
          return props.onDeleteAnimal(props.animalId);}
        }>Delete Animal</button>
      </ul>
      <hr/>
    </div>;
  return (
    <div>
      {animalInformation}
    </div>
  );

}

Animal.propTypes = {
  latinName: PropTypes.string,
  commonName: PropTypes.string,
  animalName: PropTypes.string,
  age: PropTypes.number,
  diet: PropTypes.string,
  housing: PropTypes.string,
  caretakers: PropTypes.number,
  sex: PropTypes.string,
  likes: PropTypes.string,
  dislikes: PropTypes.string,
  animalId: PropTypes.string.isRequired,
  onDeleteAnimal: PropTypes.func
};

export default Animal;
