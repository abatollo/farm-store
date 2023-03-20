const ActionType = {
  ADD_TO_BASKET: `ADD_TO_BASKET`,
  REMOVE_FROM_BASKET: `REMOVE_FROM_BASKET`
};

const ActionCreator = {
  addToBasket: (payload) => ({
    type: ActionType.ADD_TO_BASKET,
    payload
  }),
  removeFromBasket: (payload) => ({
    type: ActionType.REMOVE_FROM_BASKET,
    payload
  })
};

export { ActionType, ActionCreator };
