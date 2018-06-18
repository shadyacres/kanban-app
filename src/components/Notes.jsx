import React from 'react';

import Button from './Button';
import Editable from './Editable';
import Note from './Note';

const Notes = ({ notes, onNoteClick = () => { }, onEdit = () => { }, onDelete = () => { } }) => {
  return (
    <ul className="notes">{notes.map(({id, editing, task}) =>
      <li key={id}>
        <Note className="note" onClick={onNoteClick.bind(null, id)}>
        <Editable 
          className="editable"
          editing={editing}
          value={task}
          onEdit={onEdit.bind(null, id)} />
          <Button className="delete-button" onClick={onDelete.bind(null, id)} value="x" />
        </Note>
      </li>
    )}</ul>
  )
}

export default Notes;
