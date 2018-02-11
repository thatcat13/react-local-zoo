import React from 'react';
import athlete from './../assets/images/athlete.png';
import kylie from './../assets/images/kylie.png';

function Header() {
  const mainHeaderDiv = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '2em',
    textShadow: '4px 4px #482e2f'
  };
  const imgDiv = {
    position: 'relative',
    height: '300px',
    textAlign: 'center'
  };
  const athleteStyle = {
    transform: 'scale(0.6)',
    position: 'absolute',
    top: '-129px',
    left: '273px',
    zIndex: '-1'
  };
  const kylieStyle = {
    transform: 'scale(0.6)',
    position: 'absolute',
    top: '-109px',
    left: '3px',
    zIndex: '-1'
  };
  return (
    <div style={mainHeaderDiv}>
      <div style={imgDiv}>
        <h1>FANTASTIC ZOO</h1>
        <img style={athleteStyle} src={athlete}/>
        <img style={kylieStyle} src={kylie}/>
      </div>
    </div>
  );
}

export default Header;
