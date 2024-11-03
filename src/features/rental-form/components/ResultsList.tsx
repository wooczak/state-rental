import { memo } from "react";
import { type SearchResponseType } from "../api/types";
import ResultItem from "./ResultItem";

function ResultsList({ list }: { list: SearchResponseType }) {
  return (
    <>
      {list?.map((item) => (
        <ResultItem
          key={item.name}
          name={item.name}
          price={item.pricePerDay}
          url={item.photo}
          description={item.description}
        />
      ))}
    </>
  );
}

export default memo(ResultsList);