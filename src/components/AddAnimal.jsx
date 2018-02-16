import React from 'react';
import { Link } from 'react-router-dom';

function AddAnimalForm(props) {
  const addAnimalStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    border: '1px solid rgba(250, 214, 5, 0.5)',
    borderRadius: '4px',
    textShadow: '2px 2px #482e2f',
    padding: '30px',
    width: 'auto',
  }

  const formStyles = {
    display: 'flex',
    flexDirection: 'column'
  }
  const labelStyles = {
    padding: 10,
  }
  const buttonStyles = {
    width: 70,
    height: 35,
    textAlign: 'center',
    marginTop: 10
  }
  return (
    <div style={addAnimalStyles}>
      <div>
        <h1>Add a New Fantastic Animal</h1>
      </div>
      <form style={formStyles}>
        <label style={labelStyles}>Enter Latin Name:</label>
        <input placeholder='Lutra Lutra'></input>
        <label style={labelStyles}>Enter Common Name:</label>
        <input placeholder='European Otter'></input>
        <label style={labelStyles}>Enter Animal Name:</label>
        <input placeholder='Linda Otter'></input>
        <label style={labelStyles}>Enter Age:</label>
        <input placeholder='1'></input>
        <label style={labelStyles}>Enter Diet:</label>
        <input placeholder='omnivore'></input>
        <label style={labelStyles}>Enter Housing:</label>
        <input placeholder='Lawyer Office Zone'></input>
        <label style={labelStyles}>Enter Caretakers:</label>
        <input placeholder='2'></input>
        <label style={labelStyles}>Enter Sex:</label>
        <input placeholder='F'></input>
        <label style={labelStyles}>Enter Likes:</label>
        <input placeholder='fish, typing fast'></input>
        <label style={labelStyles}>Enter Dislikes:</label>
        <input placeholder='loud noises'></input>
        <button style={buttonStyles}><Link to='/'>DONE</Link></button>
      </form>
    </div>
  );
}

export default AddAnimalForm;
