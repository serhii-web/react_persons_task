import React, { useState } from 'react';
import './NewComment.scss';

export const NewComment = ({ onAdd }) => {
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment.trim().length) {
      onAdd(prev => [...prev, comment]);
      setComment('');
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <div className="form-container__input-field">
          <input
            type="text"
            className="form-control"
            placeholder="New comment"
            value={comment}
            onChange={handleChange}
          />
        </div>
        <div className="form-container__button">
          <input className="btn btn-primary" type="submit" value="Add" disabled={!comment.trim().length}/>
        </div>
      </div>
    </form>
  )
};
