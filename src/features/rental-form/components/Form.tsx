import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ToggleButton } from "@mui/material";
import {
  CarType,
  InitialState,
  ReducerAction,
  ReducerActions,
} from "../reducers/rentalFormReducer.types";
import { Dayjs } from "dayjs";

interface FormProps {
  formState: InitialState;
  updateFormState: React.Dispatch<ReducerActions>;
  handleSearch: () => void;
}

export default function Form({
  formState,
  updateFormState,
  handleSearch,
}: FormProps) {
  const areDatesAdded = !!formState.fromDate && !!formState.toDate;

  return (
    <form className="flex flex-col gap-4 mt-2">
      <label className="mb-2">Select your dates</label>
      <div className="flex justify-between gap-5">
        <DatePicker
          value={formState.fromDate}
          onChange={(value) =>
            updateFormState({ type: "updateFromDate", payload: value as Dayjs })
          }
          label="From date"
        />
        <DatePicker
          value={formState.toDate}
          onChange={(value) =>
            updateFormState({ type: "updateToDate", payload: value as Dayjs })
          }
          label="To date"
        />
      </div>
      <label className="mt-4">Select your vehicle</label>
      <ToggleButtonGroup
        fullWidth
        disabled={!formState.fromDate || !formState.toDate}
        className={`${
          areDatesAdded ? "opacity-100 select-all" : "opacity-50 select-none"
        }`}
        color="secondary"
        value={formState.carType}
        exclusive
        onChange={(_e, value) =>
          updateFormState({
            type: ReducerAction.TOGGLE_CAR_TYPE,
            payload: value,
          })
        }
      >
        <ToggleButton value={CarType.SEDAN}>
          <p>SEDAN</p>
        </ToggleButton>
        <ToggleButton value={CarType.SUV}>
          <p>SUV</p>
        </ToggleButton>
        <ToggleButton value={CarType.VAN}>
          <p>VAN</p>
        </ToggleButton>
      </ToggleButtonGroup>
      <button
        className="w-full bg-gray-100 py-3 rounded-lg shadow-sm focus:bg-gray-300 "
        type="button"
        onClick={handleSearch}
      >
        {formState.searchbarText}
        {formState.searchResultsCount
          ? `(${formState.searchResultsCount})`
          : null}
      </button>
    </form>
  );
}
