import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ToggleButton } from "@mui/material";
import {
  CarType,
  InitialState,
  ReducerAction,
  ReducerActions,
} from "../../reducers/rentalFormReducer.types";

interface FormProps {
  formState: InitialState;
  updateFormState: React.Dispatch<ReducerActions>;
  handleSearch: () => Promise<void>;
}

export default function Form({
  formState,
  updateFormState,
  handleSearch,
}: FormProps) {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex justify-between gap-5">
        <DatePicker value={formState.fromDate} label="From date" />
        <DatePicker value={formState.toDate} label="To date" />
      </div>
      <ToggleButtonGroup
        fullWidth
        disabled={!formState.fromDate || !formState.toDate}
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
        Search{" "}
        {formState.searchResultsCount
          ? `(${formState.searchResultsCount})`
          : null}
      </button>
    </form>
  );
}
