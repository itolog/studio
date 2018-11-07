import { LOAD_HEADER, LOAD_ABOUT } from "../actions/actionsType";

const initialState = {
  loadHeader: false,
  loadAbout: false
};

export default function headReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_HEADER:
      return { loadHeader: true };
    case LOAD_ABOUT:
      return { loadAbout: true };
    default:
      return state;
  }
}
