import React from 'react'
import Button from './components/Button';
import Campos from './components/Campos'
import Title from './components/Title';
import Quarto from './components/Quarto';
import Label from './components/Label';

import './App.css'
const App = () => {
  return (
    <div className='box'>
      <div className='coluna left'>
        <Title>Floside Pop Hotel</Title>
        <Label>Arrival</Label>
        <Campos className='local'>Feb 4th, 2019 at 7:30pm</Campos>
        <Label>Departure</Label>
        <Campos className='local'>Feb 6th, 2019 at 10:30am</Campos>
        <Label>Room</Label>
        <Campos className='local'>Business Suite</Campos>
        <Button>Confirm Reservation</Button>
      </div>
      <div className='coluna'>
      <Quarto></Quarto>
      </div>
    </div>
  );
}

export default App;
