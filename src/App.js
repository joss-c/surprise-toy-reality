import React, { useState } from 'react';
import logo from './logo.svg';
import packet from './img/packet.jpg'
import './App.css';

const names = {
  1: 'buckley',
  2: 'hopscotch',
  3: 'outback',
  4: 'polar',
  5: 'silk',
  6: 'sweetpea',
  7: 'tuxedo',
  8: 'wilder',
  9: 'mystery'
}

const selectCritter = () => {
  const secretToy = Math.floor(Math.random() * 27) + 1
  console.log(secretToy)
  if (secretToy === 27) return 9
  else return Math.floor(Math.random() * 8) + 1
}

function App() {
  const [critters, createCritter] = useState([])
  console.log(critters)
  const handleClick = () => createCritter(prevState => [...prevState, selectCritter()])
  return (
    <div className="App">
      <div style={{ padding: '1rem', display: 'flex', flexWrap: 'wrap' }}>
        {critters.map(critter => {
          return ( <img style={{ height: '3rem' }} src={require(`./img/${names[critter]}.jpg`)}></img> )
        })}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '2rem'
      }}>
        <img style={{ cursor: 'pointer' }} src={packet} onClick={() => handleClick()}></img>
      </div>
    </div>
  );
}

export default App;
