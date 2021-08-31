import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Persons.scss';
import { Person } from '../Person';

export const Persons = React.memo(({ persons }) => (
  <ul className="list">
    {persons.map(person => (
      <li
        key={uuidv4()}
        className="list__item"
      >
        <Person {...person} />
      </li>
    ))}
  </ul>
));
