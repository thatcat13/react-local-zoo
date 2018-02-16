import React from 'react';
import athlete from './../assets/images/athlete.png';
import kylie from './../assets/images/kylie.png';
import { Link } from 'react-router-dom';

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
  const linkDiv = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#8080809c'
  };

  return (
    <div style={mainHeaderDiv}>
      <style jsx global>{`
          a {
            color: #fad605;
            text-shadow: 3px 2px 3px black;
            font-size: 1em;
            text-decoration: none;
            padding: 15px;
          }
          a:hover {
            text-decoration: underline;
          }

          `}</style>
      <div style={imgDiv}>
        <h1>FANTASTIC ZOO</h1>
        <img style={athleteStyle} src={athlete}/>
        <img style={kylieStyle} src={kylie}/>
      </div>
      <div style={linkDiv}>
        <Link to="/">Home</Link>
        <Link to="/addanimalform">Add an Animal!</Link>
      </div>
    </div>
  );
}

export default Header;
