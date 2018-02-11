import React from "react";
import PropTypes from "prop-types";

function Animal(props){
  const animalListStyle = {
    listStyle: 'none',
    padding: 0
  }
  return (
    <div>
      <ul style={animalListStyle}>
        <li>Latin Name: {props.latinName}</li>
        <li>Common Name: {props.commonName}</li>
        <li>Animal Name: {props.name}</li>
        <li>Age: {props.age}</li>
        <li>Diet: {props.diet}</li>
        <li>housing: {props.housing}</li>
        <li>Caretakers: {props.caretakers}</li>
        <li>Sex: {props.sex}</li>
        <li>Likes: {props.likes}</li>
        <li>Dislikes: {props.dislikes}</li>
      </ul>
      <hr/>
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
};

export default Animal;
