import React from 'react';
import Search from './components/search/search.js';
import Header from './components/header/header.js';
import Card1stack from './components/card1stack/card1stack.js';
import Card2stack from './components/card2stack/card2stack.js';
import Footer from './components/footer/footer.js';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Search/>
      <Card1stack/>
      <Card2stack/>
      <Footer/>
    </div>
  );
}

export default App;
