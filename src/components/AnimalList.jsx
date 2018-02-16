import React from 'react';
import Animal from './Animal';
import Header from './Header';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AnimalList() {
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
    marginTop: 75
  };

  return (
    <div>
      <Header />
      <div style={mainListContainer}>
        <div style={secondaryListContainer}>
          <h1>Animal Info</h1>
          <button><Link to='/addanimalform'>ADD A NEW ANIMAL</Link></button>
          {props.animalList.map((animal, index) =>
            <Animal latinName={animal.latinName}
              commonName={animal.commonName}
              animalName={animal.animalName}
              age={animal.age}
              diet={animal.diet}
              housing={animal.housing}
              caretakers={animal.caretakers}
              sex={animal.sex}
              likes={animal.likes}
              dislikes={animal.dislikes}
              key={index}/>
          )}
        </div>
      </div>
    </div>//main div
  );
}

AnimalList.propTypes = {
  animalList: PropTypes.array
};

export default AnimalList;
