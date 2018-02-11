import React from 'react';
import { Link } from 'react-router-dom';
import error from './../assets/images/error.jpg';

function Error404(){
  const errorDivStyles = {
    textAlign: 'center'
  };

  const imgStyles = {
    objectFit: 'cover'
  };
  return (
    <div style={errorDivStyles}>
      <h2>This page does not exist!</h2>
      <img style={imgStyles} src={error}/>
      <h3>Would you like to return <Link to='/'>home</Link> instead?</h3>
    </div>
  );
}



export default Error404;
