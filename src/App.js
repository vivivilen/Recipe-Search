import React from 'react';
import './App.scss'
import { SearchBar } from './Component/SearchBar';
import { Footer } from './Component/Footer';

function App() {
  return (
    <div className="App">
      <h1>Find Out Your Favorite Recipe</h1>
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;