import React from 'react';
import './Comment.scss';

export const Comment = ({ comment }) => {
  return (
    <span className="text">{comment}</span>
  )
}