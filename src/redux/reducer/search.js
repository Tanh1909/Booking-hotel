import { SEARCH } from "../action/index";

const search = (state = {}, action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload;
    default:
      return state;
  }
};

export { search };
