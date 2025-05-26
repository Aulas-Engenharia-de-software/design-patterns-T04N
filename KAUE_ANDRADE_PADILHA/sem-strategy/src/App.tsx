import { useState } from "react";

type Item = {
  name: string;
  value: number;
  date: Date;
};

const itens: Item[] = [
  { name: "Smartphone Samsung Galaxy", value: 1999, date: new Date("2024-10-01") },
  { name: "Notebook Dell Inspiron", value: 3499, date: new Date("2024-09-15") },
  { name: "Fone de Ouvido Bluetooth", value: 199, date: new Date("2024-10-05") },
  { name: "Cadeira Gamer", value: 899, date: new Date("2024-08-20") },
  { name: "Teclado Mecânico RGB", value: 299, date: new Date("2025-05-27") },
  { name: 'Monitor 24" Full HD', value: 799, date: new Date("2024-09-25") },
  { name: "Smartwatch Xiaomi", value: 499, date: new Date("2024-10-02") },
  { name: "Mouse Logitech Wireless", value: 159, date: new Date("2024-10-07") },
  { name: "HD Externo 1TB", value: 379, date: new Date("2024-09-30") },
  { name: "Echo Dot Alexa 5ª Geração", value: 359, date: new Date("2024-10-03") },
];

export default function App() {
  const [sortedItems, setSortedItems] = useState<Item[]>([...itens]);

  const sortByName = () => {
    const sorted = [...sortedItems].sort((a, b) => a.name.localeCompare(b.name));
    setSortedItems(sorted);
  };

  const sortByValue = () => {
    const sorted = [...sortedItems].sort((a, b) => a.value - b.value);
    setSortedItems(sorted);
  };

  const sortByDate = () => {
    const sorted = [...sortedItems].sort((a, b) => b.date.getTime() - a.date.getTime());
    setSortedItems(sorted);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl mb-4">Sem Design Pattern</h1>

      <div className="mb-4 flex items-center gap-4">
        <button onClick={sortByName} className="bg-blue-700 text-white p-2 rounded-lg">
          Sort by Name
        </button>
        <button onClick={sortByValue} className="bg-red-700 text-white p-2 rounded-lg">
          Sort by Value
        </button>
        <button onClick={sortByDate} className="bg-green-700 text-white p-2 rounded-lg">
          Sort by Date
        </button>
      </div>

      <div className="flex flex-col items-center w-full max-w-3xl">
        {sortedItems.map((item, index) => (
          <div key={index} className="border p-4 mb-2 rounded-lg w-full flex justify-between">
            <span>
              <strong>Name:</strong> {item.name}
            </span>
            <span>
              <strong>Value:</strong> R$ {item.value}
            </span>
            <span>
              <strong>Date:</strong> {item.date.toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
