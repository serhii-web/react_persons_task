import React, { useContext } from 'react';
import './Person.scss';
import { Content } from '../../App';

export const Person = ({ name, birth_year}) => {
  const { setPerson } = useContext(Content);
  
  return (
    <div className="card">
      <section className="card__name">
        <h2>{name}</h2>
        <h3>{birth_year}</h3>
      </section>
      <div className="card__button">
        <button
          className="button"
          onClick={() => setPerson(name)}
        >
          Show comments
        </button>
      </div>
    </div>
  )
};
