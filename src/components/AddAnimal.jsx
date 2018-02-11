import React from 'react';

function AddAnimal(props) {
  return (
    <div>
      <div>
        <h1>Add a New Fantastic Animal</h1>
      </div>
      <form>
        <label>Enter Latin Name:</label>
        <input placeholder='Lutra Lutra'></input>
        <label>Enter Common Name:</label>
        <input placeholder='European Otter'></input>
        <label>Enter Animal Name:</label>
        <input placeholder='Linda Otter'></input>
        <label>Enter Age:</label>
        <input placeholder='1'></input>
        <label>Enter Diet:</label>
        <input placeholder='omnivore'></input>
        <label>Enter Housing:</label>
        <input placeholder='Lawyer Office Zone'></input>
        <label>Enter Caretakers:</label>
        <input placeholder='2'></input>
        <label>Enter Sex:</label>
        <input placeholder='F'></input>
        <label>Enter Likes:</label>
        <input placeholder='fish, typing fast'></input>
        <label>Enter Dislikes:</label>
        <input placeholder='loud noises'></input>
        <button>DONE</button>
      </form>
    </div>
  );
}

export default AddAnimal;
