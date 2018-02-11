import React from 'react';
import Animal from './Animal';
import Header from './Header';

const masterAnimalList = [
  {
    latinName: 'Lutra Lutra',
    commonName: 'European Otter',
    animalName: 'Linda Otter',
    age: 1,
    diet: 'omnivore',
    housing: 'Lawyer Office Zone',
    caretakers: 2,
    sex: 'F',
    likes: 'fish, typing fast',
    dislikes: 'loud noises'
  },
  {
    latinName: 'Talpa Europa',
    commonName: 'European Mole',
    animalName: 'Mole',
    age: 1,
    diet: 'carnivore',
    housing: 'Underground Zone',
    caretakers: 2,
    sex: 'M',
    likes: 'earthworms',
    dislikes: 'bright light'
  },
  {
    latinName: 'Oryctolagus Cuniculus',
    commonName: 'European Rabbit',
    animalName: 'Rabbit',
    age: 7,
    diet: 'herbivore',
    housing: 'Kitchen Zone',
    caretakers: 2,
    sex: 'M',
    likes: 'cooking',
    dislikes: 'cooks who are slow'
  },
  {
    latinName: 'Meles Meles',
    commonName: 'European Badger',
    animalName: 'Clive Badger, Esq.',
    age: 5,
    diet: 'omnivore',
    housing: 'Litigation Zone',
    caretakers: 1,
    sex: 'M',
    likes: 'loyalty',
    dislikes: 'reckless behavior'
  },
  {
    latinName: 'Castor Fiber',
    commonName: 'European Beaver',
    animalName: 'Beaver',
    age: 4,
    diet: 'herbivore',
    housing: 'Litigation Zone',
    caretakers: 1,
    sex: 'M',
    likes: 'helping Mr. Fox',
    dislikes: 'loud noises'
  },
  {
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
];

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
          <button>EDIT ANIMAL INFO</button>
          {masterAnimalList.map((animal, index) =>
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
    </div>
  );
}

export default AnimalList;
