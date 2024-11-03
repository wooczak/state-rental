export const URL = {
  FETCH_SEARCH_RESULTS: (
    fromDate: string,
    toDate: string,
    carType: "suv" | "sedan" | "van"
  ) => `http://localhost:3000/cars?fromDate=${fromDate}&toDate=${toDate}&carType=${carType}
`,
};