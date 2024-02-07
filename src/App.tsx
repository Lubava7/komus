import React from 'react';
import logo from './logo.svg';
import './App.css';
import Filters from './components/Filters/Filters';

function App() {
  return (
    <div className='App'>
      <h1>ВАСИЛИСА, для того, чтобы увидеть данные в таблице</h1>
      <h1>выбери только Цель и Канал - данные сразу отобразятся</h1>
      <Filters />
    </div>
  );
}

export default App;
