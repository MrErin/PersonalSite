export default (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_BULB':
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
