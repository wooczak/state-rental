import {
  type InitialState,
  ReducerAction,
  type ReducerActions,
} from "./rentalFormReducer.types";

export function rentalFormReducer(state: InitialState, action: ReducerActions) {
  switch (action.type) {
    case ReducerAction.TOGGLE_CAR_TYPE:
      return { ...state, carType: action.payload };
    case ReducerAction.UPDATE_FROM_DATE:
      return { ...state, fromDate: action.payload };
    case ReducerAction.UPDATE_TO_DATE:
      return { ...state, toDate: action.payload };
    case ReducerAction.UPDATE_SEARCH_RESULTS_COUNT:
      return { ...state, searchResultsCount: action.payload };
  }
}
