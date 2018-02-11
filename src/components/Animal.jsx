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
        <li>{props.latinName}</li>
        <li>{props.commonName}</li>
        <li>{props.name}</li>
        <li>{props.age}</li>
        <li>{props.diet}</li>
        <li>{props.housing}</li>
        <li>{props.caretakers}</li>
        <li>{props.sex}</li>
        <li>{props.likes}</li>
        <li>{props.dislikes}</li>
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
