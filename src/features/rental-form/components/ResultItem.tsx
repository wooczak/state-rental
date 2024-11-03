interface ResultItemProps {
  name: string;
  url: URL;
  description: string;
  price: number;
}

export default function ResultItem({
  name,
  url,
  description,
  price,
}: ResultItemProps) {
  return (
    <div className="w-full flex gap-4 relative">
      <img src={url as unknown as string} className="w-1/3 aspect-square" />
      <div className="flex flex-col justify-between w-2/3">
        <div>
          <h2 className="text-h2">{name}</h2>
          <p className="text-gray-500 italic">{description}</p>
        </div>

        <p className="font-bold">{price}$ / day</p>
      </div>
    </div>
  );
}
