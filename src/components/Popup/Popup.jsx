import React, { useState, useEffect, useContext } from 'react';
import { NewComment } from '../NewComment'
import { Comments } from '../Comments'
import './Popup.scss';
import { Content } from '../../App'

export const Popup = () => {
  const [comments, setComments] = useState([]);
  const { person, setPerson} = useContext(Content);

  useEffect(() => {
    const getComments = JSON.parse(localStorage.getItem(person) || '[]')

    setComments(getComments)
  }, []);

  useEffect(() => {
    localStorage.setItem(person, JSON.stringify(comments));
  }, [comments])

  return (
    <div className="popup">
      <NewComment onAdd={setComments}/> 
      {!!comments.length && <Comments comments={comments}/>}
      <button
        className="popup__button"
        onClick={() => setPerson('')}
      >
        X
      </button>
    </div>
  )
}