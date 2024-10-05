import { useState } from "react";
import { sendPizza } from "../hook/CrudPizza";

//Falta agregar el pizza dto
const CreatePizza = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number | string>();
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatedPrice = Number(price);
    sendPizza({ name, price: formatedPrice, ingredients });
    setIngredients("");
    setName("");
    setPrice("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-700">
          Crear una Pizza
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nombre de la pizza"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
          />
          <input
            type="text"
            placeholder="Ingrediente de la pizza"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
          />
          <input
            type="number"
            placeholder="Precio de la pizza"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all"
          >
            Crear Pizza
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePizza;
