import * as Actions from "../actions";
import Place from "../../models/Place";

const initialState = {
  places: [],
};

export const PlacesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_PLACE:
      const newPlace = new Place(new Date().toString(), action.placeData.title);
      return {
        places: state.places.concat(newPlace),
      };
    default:
      return state;
  }
};
