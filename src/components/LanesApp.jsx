import React from 'react';
import uuid from 'uuid';
import connect from '../libs/connect';

import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';
import Button from './Button';

const LanesApp = ({ LaneActions, lanes }) => {
  const addLane = () => {
    LaneActions.create({
      id: uuid.v4(),
      name: 'New Lane'
    });
  };

  return (
    <div>
      <Button className="add-lane" onClick={addLane} value="+" />
      <Lanes lanes={lanes} />
    </div>
  );
};

export default connect (({lanes}) => ({
  lanes
}), {
  LaneActions
})(LanesApp)