const initialState = {};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        favourites: {
          ...state,
          favourites,
          content: [...state.favourites.content, action.payload],
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
