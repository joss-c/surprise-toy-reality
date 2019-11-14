import React, { useState, useEffect } from 'react';
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

function App() {
  const [critters, createCritter] = useState([])
  const [moneySpent, addMoney] = useState(0)
  const [countCritters, addCritter] = useState(Array.from(Array(9), () => 0))
  const [moneyWasted, setMoneyWasted] = useState(0)

  const selectCritter = () => {
    const secretToy = Math.floor(Math.random() * 27) + 1
    if (secretToy === 27) {
      addCritter(prevState => {
        prevState[8]++
        return prevState
      })
      return 9
    }
    const critter = Math.floor(Math.random() * 8) + 1
    addCritter(prevState => {
      prevState[critter - 1]++
      return prevState
    })
    return critter
  }

  const handleClick = () => {
    addMoney(prevState => prevState += 7)
    createCritter(prevState => [...prevState, selectCritter()])
  }
  const hasFullSet = () => {
    const total = new Set(critters)
    const result = [...total].reduce((a, b) => a + b, 0)
    return (result === 45) ? ['YES', 'green'] : ['NO', 'red']
  }
  useEffect(() => {
    setMoneyWasted(countCritters.reduce((sum, critter) => {
      if (critter > 1) sum += (critter - 1) * 7
      return sum
    }, 0))
    console.log('CHECK IT', countCritters)
  }, [moneySpent])
  return (
    <div style={{ padding: '1rem' }}>
      <div>
        <div style={{ display: 'flex' }}>
          <div>
            {`Money spent: $${moneySpent}`}
          </div>
          <div style={{ paddingLeft: '1rem' }}>
            {`Money wasted: $${moneyWasted}`}
          </div>
        </div>
        <p>Full set? <span style={{ color: hasFullSet()[1] }}>{hasFullSet()[0]}</span></p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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
