import LaneActions from '../actions/LaneActions'
import NoteActions from '../actions/NoteActions'


export default class LaneStore {
  constructor() {
    this.bindActions(LaneActions);

    this.lanes = [];
  }

  create(lane) {
    
    lane.editing = true;
    lane.selected = true;

    this.setState({
      lanes: this.lanes.concat(lane)
    });
  }

  update(updatedLane) {
    this.setState({
      lanes: this.lanes.map(lane => {
        if (lane.id === updatedLane.id) {
          return Object.assign({}, lane, updatedLane);
        }

        return lane;
      })
    });
  }

  delete(deletedLaneId) {

    NoteActions.deleteByLaneId.defer(deletedLaneId);

    this.setState({
      lanes: this.lanes.filter(lane =>
        lane.id !== deletedLaneId)
    });
  }
}