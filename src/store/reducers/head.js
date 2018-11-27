import { LOAD_HEADER, LOAD_ABOUT, LOAD_THIRD } from "../actions/actionsType";

const initialState = {
  loadHeader: false,
  loadAbout: false,
  loadThird: false
};

export default function headReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_HEADER:
      return { loadHeader: true };
    case LOAD_ABOUT:
      return { loadAbout: true };
    case LOAD_THIRD:
      return { loadThird: true };
    default:
      return state;
  }
}
