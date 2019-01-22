import { ActionTypes } from './types';

export const navMove = (currentNav: number, isForward: boolean) => {
  return {
    type: ActionTypes.NAV_MOVE,
  };
};
