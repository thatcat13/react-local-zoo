import React from 'react';
import Animal from './Animal';
import PropTypes from 'prop-types';

function AnimalList(props) {
  const mainListContainer = {
    display: 'flex',
    justifyContent: 'center'
  };
  const secondaryListContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    border: '1px solid rgba(250, 214, 5, 0.5)',
    borderRadius: '4px',
    textShadow: '2px 2px #482e2f',
    padding: '30px',
    width: 'auto',
    margin: 50
  };


  return (
    <div>
      <div style={mainListContainer}>
        <div style={secondaryListContainer}>
          <h1>Current Residents:</h1>
          {Object.keys(props.animalList).map(function(animalId) {
            let animal = props.animalList[animalId];
            //animalList is passed as props as an object representing state value of masterAnimalList from App; AnimalList function will .map through the object using the UUIDs and set animal variable equal to the object value of each unique animal
            //return value to be rendered will be the key-value pairs contained within each object as list items
            return <Animal latinName={animal.latinName}
              commonName={animal.commonName}
              animalName={animal.animalName}
              age={animal.age}
              diet={animal.diet}
              housing={animal.housing}
              caretakers={animal.caretakers}
              sex={animal.sex}
              likes={animal.likes}
              dislikes={animal.dislikes}
              animalId={animalId}
              key={animalId}
              onDeleteAnimal={props.onDeleteAnimal} />;
            })
          }
        </div>
      </div>
    </div>//main div
  );
}

AnimalList.propTypes = {
  animalList: PropTypes.object,
  onDeleteAnimal: PropTypes.func
};

export default AnimalList;
