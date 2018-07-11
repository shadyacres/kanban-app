import React from 'react';
import uuid from 'uuid';

import Notes from './Notes';
import Button from './Button';

import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';


class NotesApp extends React.Component {

  render() {
    const { notes } = this.props;

    return (
      <div className="notes-app">
        <Button className="add-note" value="+" onClick={this.addNote} />
        <Notes notes={notes} onNoteClick={this.activateNoteEdit} onEdit={this.editNote} onDelete={this.deleteNote} />
      </div>
    );
  }

  deleteNote = (id, e) => {
    e.stopPropagation();

    this.props.NoteActions.delete(id);
  }

  addNote = () => {
    this.props.NoteActions.create({
      id: uuid.v4(),
      task: 'new task'
    });
  }

  activateNoteEdit = (id) => {
    this.props.NoteActions.update({id, editing: true});
  }

  editNote = (id, task) => {
    this.props.NoteActions.update({id, task, editing: false});
  }
}

export default connect(({ notes }) => ({
  notes
}), {
    NoteActions
})(NotesApp)



