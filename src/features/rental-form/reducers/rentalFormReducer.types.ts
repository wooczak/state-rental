import { Dayjs } from "dayjs";

export enum CarType {
  SEDAN,
  SUV,
  VAN,
}

export const ReducerAction = {
  UPDATE_FROM_DATE: "updateFromDate",
  UPDATE_TO_DATE: "updateToDate",
  TOGGLE_CAR_TYPE: "toggleCarType",
  UPDATE_SEARCH_RESULTS_COUNT: "updateSearchResultsCount",
} as const;

export type InitialState = {
  carType: CarType;
  fromDate: Dayjs | undefined;
  toDate: Dayjs | undefined;
  searchResultsCount: number | null;
};

export type ReducerActions =
  | {
      type: "updateFromDate";
      payload: Dayjs;
    }
  | {
      type: "updateToDate";
      payload: Dayjs;
    }
  | {
      type: "toggleCarType";
      payload: CarType;
    }
  | {
      type: "updateSearchResultsCount";
      payload: number;
    };
