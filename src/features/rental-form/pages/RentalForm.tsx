import { useReducer } from "react";
import { CgSpinnerAlt } from "react-icons/cg";
import Snackbar from "@mui/material/Snackbar";

import Form from "../components/Form";
import { rentalFormReducer } from "../reducers/rentalFormReducer";
import { initialState } from "../reducers/rentalFormReducer.constants";
import { fetchResults } from "../api";
import ResultsList from "../components/ResultsList";
import { CarTypeMap } from "../reducers/rentalFormReducer.types";
import { SearchResponseType } from "../api/types";

export default function RentalForm() {
  const [formState, updateFormState] = useReducer(
    rentalFormReducer,
    initialState
  );

  async function runSearch() {
    updateFormState({ type: "toggleResultsLoading" });
    const isNotFormFull = !formState.toDate || !formState.fromDate;

    if (isNotFormFull) {
      updateFormState({
        type: "toggleSnackbar",
        payload: {
          toggle: true,
          message: "Add dates and type of the car first",
        },
      });
      updateFormState({
        type: "updateSearchbarText",
        payload: "Search",
      });

      updateFormState({ type: "toggleResultsLoading" });

      return;
    }

    const resultsList = await fetchResults({
      fromDate: formState.fromDate?.format("YYYY-MM-DD") as string,
      toDate: formState.toDate?.format("YYYY-MM-DD") as string,
      carType: CarTypeMap[formState.carType],
    });

    if (resultsList && resultsList.length > 0) {
      updateFormState({
        type: "updateSearchResultsList",
        payload: resultsList,
      });
      updateFormState({ type: "toggleResultsLoading" });
    }
  }

  function handleSearchClick() {
    // Optimistically change the UI
    updateFormState({
      type: "updateSearchbarText",
      payload: "Update search data",
    });

    runSearch();
  }

  return (
    <section className="flex flex-col gap-4 my-10">
      <h1 className="font-bold text-h1 leading-10">Rent your car</h1>
      <Form
        formState={formState}
        updateFormState={updateFormState}
        handleSearch={handleSearchClick}
      />
      {formState.isResultsLoading ? (
        <CgSpinnerAlt size={32} className="animate-spin w-full" />
      ) : (
        <ResultsList list={formState.resultsList as SearchResponseType} />
      )}

      <Snackbar
        open={formState.snackBar.isOpen}
        autoHideDuration={4000}
        message={formState.snackBar.message}
        onClose={() =>
          updateFormState({
            type: "toggleSnackbar",
            payload: { toggle: false },
          })
        }
      />
    </section>
  );
}
