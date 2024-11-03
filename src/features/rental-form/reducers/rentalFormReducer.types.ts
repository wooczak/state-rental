import { SearchResponseType } from "./../api/types";
import { Dayjs } from "dayjs";

export enum CarType {
  SEDAN,
  SUV,
  VAN,
}

export const CarTypeMap = {
  [CarType.SEDAN]: "sedan",
  [CarType.SUV]: "suv",
  [CarType.VAN]: "van",
} as const;

export const ReducerAction = {
  UPDATE_FROM_DATE: "updateFromDate",
  UPDATE_TO_DATE: "updateToDate",
  TOGGLE_CAR_TYPE: "toggleCarType",
  UPDATE_SEARCH_RESULTS_COUNT: "updateSearchResultsCount",
  TOGGLE_RESULTS_LOADING: "toggleResultsLoading",
  TOGGLE_SNACKBAR: "toggleSnackbar",
  UPDATE_SEARCH_RESULTS_LIST: "updateSearchResultsList",
  UPDATE_SEARCH_BAR_TEXT: "updateSearchbarText",
} as const;

export type InitialState = {
  carType: CarType;
  fromDate: Dayjs | null;
  toDate: Dayjs | null;
  searchResultsCount: number | null;
  snackBar: {
    isOpen: boolean;
    message?: string;
  };
  resultsList: SearchResponseType | undefined;
  searchbarText: string;
  isResultsLoading: boolean;
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
    }
  | {
      type: "toggleSnackbar";
      payload: {
        toggle: boolean;
        message?: string;
      };
    }
  | {
      type: "updateSearchResultsList";
      payload: SearchResponseType | [];
    }
  | {
      type: "updateSearchbarText";
      payload: string;
    }
  | {
      type: "toggleResultsLoading";
    };
