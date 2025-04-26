interface Props {
  name: string;
  price: string | number;
}

export default function MenuCard({ name, price }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white">
      <h3 className="text-lg font-bold text-gray-800 mb-2">
        {name}
      </h3>
      <p className="text-orange-500 font-bold text-md">
        ${price}
      </p>
    </div>
  );
}
