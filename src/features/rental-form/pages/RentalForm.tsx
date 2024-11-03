import { useReducer } from "react";
import Form from "./components/Form";
import { rentalFormReducer } from "../reducers/rentalFormReducer";
import { initialState } from "../reducers/rentalFormReducer.constants";
import { fetchResults } from "../api";

export default function RentalForm() {
  const [formState, updateFormState] = useReducer(
    rentalFormReducer,
    initialState
  );

  async function handleSearch() {
    const resultsCount = await fetchResults();

    if (resultsCount) {
      updateFormState({
        type: "updateSearchResultsCount",
        payload: resultsCount,
      });
    }
  }

  return (
    <section className="flex flex-col gap-4 my-10">
      <h1 className="font-bold text-h1 leading-10">Rent your car</h1>
      <Form
        formState={formState}
        updateFormState={updateFormState}
        handleSearch={handleSearch}
      />
    </section>
  );
}
