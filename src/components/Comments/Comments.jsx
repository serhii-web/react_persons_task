import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Comment } from '../Comment'
import './Comments.scss';

export const Comments = ({ comments }) => {
  return (
    <ul className="comments">
      {comments.map(comment => (
        <li className="comments-item" key={uuidv4()}>
          <Comment comment={comment}/>
        </li>
      ))}
    </ul>
  )
}