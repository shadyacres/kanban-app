import React from 'react';
import uuid from 'uuid';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';
import Notes from './Notes';
import Button from './Button';
import LaneActions from '../actions/LaneActions';

const Lane = ({ lane, notes, NoteActions, ...props }) => {


  const activateNoteEdit = id => {
    NoteActions.update({ id, editing: true });
  };
  const editNote = (id, task) => {
    NoteActions.update({ id, task, editing: false });
  };

  const addNote = e => {
    e.stopPropagation();

    const noteId = uuid.v4();

    NoteActions.create({
      id: noteId,
      task: 'New Task'
    }).then(noteId => {
      LaneActions.attachToLane({
        laneId: lane.id,
        noteId

      });
    })
  };

  const deleteNote = (noteId, e) => {
    e.stopPropagation();
    NoteActions.delete(noteId);
  };

  return (
    <div {...props}>
      <div className="lane-header">
        <div className="lane-add-note">
          <Button onClick={addNote} value="Add item" />
        </div>
        <div className="lane-name">{lane.name}</div>
      </div>
      <Notes
        notes={notes}
        onNoteClick={activateNoteEdit}
        onEdit={editNote}
        onDelete={deleteNote} />
    </div>
  )
};



export default connect(
  ({ notes }) => ({
    notes
  }), {
    NoteActions
  }
)(Lane)