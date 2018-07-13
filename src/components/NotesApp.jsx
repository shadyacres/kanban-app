import React from 'react';
import uuid from 'uuid';

import Notes from './Notes';
import Button from './Button';

export default class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React',
        },
        {
          id: uuid.v4(),
          task: 'Do laundry',
        }
      ]
    };
  }

  render() {
    const { notes } = this.state;

    return (
      <div className="notes-app">
        <Button className="add-note" value="+" onClick={this.addNote} />
        <Notes notes={notes} onNoteClick={this.activateNoteEdit} onEdit={this.editNote} onDelete={this.deleteNote} />
      </div>
    );
  }

  deleteNote = (id, e) => {
    e.stopPropagation();

    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }

  addNote = () => {
    this.setState({
      notes: [...this.state.notes, {
        id: uuid.v4(),
        task: 'New Task1',
        editing: true
      }]
    });
  }


  activateNoteEdit = (id) => {
    this.changeEditState(id, false);
  }
  editNote = (id, task) => {
    this.changeEditState(id, true, task);
  }



  changeEditState = (id, editing, task) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if (note.id === id) {
          if (editing) {
            note.editing = false;
            note.task = task;
          } else {
            note.editing = true;
          }
        }

        return note;
      })
    });
  }
}


