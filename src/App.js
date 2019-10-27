import React from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar';
import PokeList from './components/PokeList';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div className="container">
        <PokeList />
      </div>
    </div>
  );
}

export default App;
