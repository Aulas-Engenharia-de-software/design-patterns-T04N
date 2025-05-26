import { useState } from "react";
import type { SortStrategy } from "./strategies/SortStrategy";
import { SortByValue } from "./strategies/SortByValue";
import { SortByName } from "./strategies/SortByName";
import { SortByDate } from "./strategies/SortByDate";

type Item = {
  name: string;
  value: number;
  date: Date;
}

const itens: Item[] = [
  { name: "Smartphone Samsung Galaxy", value: 1999, date: new Date("2024-10-01") },
  { name: "Notebook Dell Inspiron", value: 3499, date: new Date("2024-09-15") },
  { name: "Fone de Ouvido Bluetooth", value: 199, date: new Date("2024-10-05") },
  { name: "Cadeira Gamer", value: 899, date: new Date("2024-08-20") },
  { name: "Teclado Mecânico RGB", value: 299, date: new Date("2025-05-27") },
  { name: "Monitor 24\" Full HD", value: 799, date: new Date("2024-09-25") },
  { name: "Smartwatch Xiaomi", value: 499, date: new Date("2024-10-02") },
  { name: "Mouse Logitech Wireless", value: 159, date: new Date("2024-10-07") },
  { name: "HD Externo 1TB", value: 379, date: new Date("2024-09-30") },
  { name: "Echo Dot Alexa 5ª Geração", value: 359, date: new Date("2024-10-03") },
];

export default function App() {
  const [strategy, setStrategy] = useState<SortStrategy<Item>>(new SortByName<Item>());

  function handleSortChange(sortStrategy: SortStrategy<Item>) {
    setStrategy(sortStrategy);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-4">Strategy Pattern Example</h1>
      <div className="mb-4 flex items-center gap-4">
        <button className="bg-blue-700 text-slate-50 p-2 rounded-lg cursor-pointer" onClick={() => handleSortChange(new SortByName<Item>)}>Sort by Name</button>
        <button className="bg-red-700 text-slate-50 p-2 rounded-lg cursor-pointer" onClick={() => handleSortChange(new SortByValue<Item>)}>Sort by Value</button>
        <button className="bg-green-700 text-slate-50 p-2 rounded-lg cursor-pointer" onClick={() => handleSortChange(new SortByDate<Item>)}>Sort by Date</button>
      </div>
      <div className="flex flex-col items-center">
        {strategy.sort(itens).map((item, index) => (
          <div key={index} className="border p-2 mb-2 rounded-lg flex items-center justify-between gap-4 w-full">
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Value:</strong> {item.value}</p>
            <p><strong>Date:</strong> {item.date.toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
