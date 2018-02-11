import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from 'react-router-dom';
import Animal from './Animal';

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
]

function AnimalList(props) {
  return (
    <div>
      <div>
        <h1>Animal Info</h1>
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
  );
}

export default AnimalList;
