import { URL } from "./constants";
import { SearchResponseType } from "./types";

interface FetchArgs {
  fromDate: string;
  toDate: string;
  carType: "suv" | "sedan" | "van";
}

export default async function fetchResults({
  fromDate,
  toDate,
  carType,
}: FetchArgs): Promise<SearchResponseType | undefined> {
  try {
    const response = await fetch(
      URL.FETCH_SEARCH_RESULTS(fromDate, toDate, carType)
    );

    if (response.status === 400) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
}
