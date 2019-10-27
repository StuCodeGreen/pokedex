import React from 'react';
import './App.css';
import MyNavbar from "./components/MyNavbar";
import PokeCard from "./components/PokeCard";

function App() {
  return (
    <div className="App">
			<MyNavbar />
			<PokeCard/>
    </div>
  );
}

export default App;
