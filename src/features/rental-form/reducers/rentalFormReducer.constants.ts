import dayjs from "dayjs";
import { CarType, type InitialState } from "./rentalFormReducer.types";

export const initialState: InitialState = {
  carType: CarType.SEDAN,
  fromDate: dayjs(),
  toDate: undefined,
  searchResultsCount: null
};
