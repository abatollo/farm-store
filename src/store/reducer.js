import { ActionType } from "./action";

const initialState = {
  overallCost: 0,
  cart: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_TO_BASKET:
      return {
        ...state,
        cart: [...state.cart, action.payload.id],
        overallCost: state.overallCost + action.payload.description.price
      };
    case ActionType.REMOVE_FROM_BASKET:
      return {
        ...state,
        cart: state.cart.filter(item => item !== action.payload.id),
        overallCost: state.overallCost - action.payload.description.price
      }
    default:
      return state;
  }
};

export { reducer };
