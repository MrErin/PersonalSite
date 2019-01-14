import {Action, ActionCreator} from 'redux'

const changeBulb: ActionCreator<Action> = () => {
  {
    type: 'CHANGE_BULB',
    payload: 'new bulb',
  };
};
