import React, { useState, useEffect } from 'react';
import './App.scss';
import { Persons } from './components/Persons';
import { Popup } from './components/Popup';

export const Content = React.createContext(null)

function App() {
  const [persons, setPersons] = useState(null);
  const [person, setPerson] = useState('');
  const obj = { person, setPerson }
 
  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(res => res.json())
      .then(res => res.results)
      .then(setPersons)
  }, []);

  return (
    <Content.Provider value={obj}>
      <div className="App">
        <header className="header">
          <h1 className="header__title">
            Star Wars
          </h1>
        </header>
        <div className="main">
          {persons && <Persons persons={persons} />}
        </div>

        {person && <div className="popup-container">
          <Popup />
        </div>} 

        <footer className="footer">
          <p className="footer__title">
            Lucasfilm 1979 - 2021
          </p>
        </footer>
      </div>
    </Content.Provider>
  );
}

export default App;
