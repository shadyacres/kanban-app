import React from 'react';

import {compose} from 'redux';
import {DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';
import Notes from './Notes';
import LaneHeader from './LaneHeader';

const Lane = ({ connectDropTarget, lane, notes, NoteActions, ...props }) => {


  const activateNoteEdit = id => {
    NoteActions.update({ id, editing: true });
  };
  const editNote = (id, task) => {
    NoteActions.update({ id, task, editing: false });
  };

  const deleteNote = (noteId, e) => {
    e.stopPropagation();

    NoteActions.delete(noteId);
  };

  return connectDropTarget(
    <div {...props}>
      <LaneHeader lane={lane}/>
      <Notes
        notes={selectNotesByIds(notes, lane.id)}
        onNoteClick={activateNoteEdit}
        onEdit={editNote}
        onDelete={deleteNote} />
    </div>
  )
};

function selectNotesByIds(allNotes, laneId) {
  return allNotes.filter(note => note.laneId === laneId);
}

const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;

    NoteActions.moveToLane({noteId: sourceId, laneId: targetProps.lane.id});
  }
} 

export default 
compose(
  DropTarget(ItemTypes.NOTE, noteTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  })),
  connect(
      ({ notes }) => ({
        notes
      }), {
        NoteActions
      })
    )(Lane)