import React from 'react';
import './App.css';
import PokeNavbar from './components/PokeNavbar';
import PokeList from './components/PokeList';


function App() {
  return (
    <div className="App">
      <PokeNavbar />
      <div className="container">
        <PokeList />
      </div>
    </div>
  );
}

export default App;
