import NoteActions from '../actions/NoteActions';
import update from 'immutability-helper';


export default class NoteStore {
  constructor() {

    this.bindActions(NoteActions);

    this.notes = [];
  }

  create(note) {
    note.editing = true;
    note.selected = true;
    this.setState({
      notes: this.notes.concat(note)
    });
  }
  update(updatedNote) {
    this.setState({
      notes: this.notes.map(note => {
        if (note.id === updatedNote.id) {
          return Object.assign({}, note, updatedNote);
        }

        return note;
      })
    });
  }
  delete(id) {
    this.setState({
      notes: this.notes.filter(note => note.id !== id)
    });
  }

  move({ sourceId, targetId }) {
    const allNotes = this.notes;

    // source Note = from note
    // target Note = to note

    const sourceNote = allNotes.filter(note => note.id === sourceId)[0];
    const targetNote = allNotes.filter(note => note.id === targetId)[0];

    const srcIdx = allNotes.indexOf(sourceNote);
    const tarIdx = allNotes.indexOf(targetNote);

    sourceNote.laneId = targetNote.laneId;


    const updNotes = update(allNotes, { $splice: [[srcIdx, 1], [tarIdx, 0, sourceNote]] });

    this.setState({ notes: updNotes })
  }

  moveToLane({ noteId, laneId }) {

    if (!this.notes.filter(note => note.laneId === laneId).length) {

      const updNotes = this.notes.map(note => {

      })

      notes: this.notes.map(note => {

        if (note.id === noteId) {
          note.laneId = laneId;
          return this.update(note);
        }
      });
    }
  }

  deleteByLaneId(laneId) {
    this.setState({
      notes: this.notes.filter(note => note.laneId !== laneId)
    });
  }
}