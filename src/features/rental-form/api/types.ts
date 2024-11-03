export type SearchResponseType = {
  description: string;
  id: number;
  name: string;
  photo: URL;
  pricePerDay: number;
  type: "sedan" | "van" | "suv";
}[];
