import React from 'react';

import Note from './Note';

const Notes = ({ notes, onDelete = () => { } }) => {
  return (
    <ul>{notes.map(note =>
      <li key={note.id}><Note
        onDelete={onDelete.bind(null, note.id)}
        task={note.task} /></li>
    )}</ul>
  )
}

export default Notes;
