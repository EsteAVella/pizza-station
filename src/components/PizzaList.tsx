import { useState, useEffect } from "react";
import { deletePizza, getPizzas } from "../hook/CrudPizza";
import { pizzaInterface } from "../interface/pizzaInterface";
import { TrashIcon } from "@heroicons/react/outline";

const PizzaList: React.FC = () => {
  const [pizzas, setPizzas] = useState<pizzaInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const data = await getPizzas();
        setPizzas(data);
      } catch (err) {
        setError("Error fetching pizzas");
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  const onDelete = async (id: number) => {
    const confirm = window.confirm("Are you sure to eliminate this pizza?");
    if (confirm) {
      await deletePizza(id);
      setPizzas((prevPizzas) => prevPizzas.filter((pizza) => pizza.id !== id));
    }
  };

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Pizza List
      </h1>
      {pizzas.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pizzas.map((pizza) => (
            <div
              key={pizza.id}
              className="bg-gray-100 rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 mr-2">
                  {pizza.name}
                </h2>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => {
                    if (pizza.id !== undefined) onDelete(pizza.id);
                  }}
                >
                  {<TrashIcon className="h-5 w-5" aria-hidden="true" />}
                </button>
              </div>
              <p className="text-gray-600">Here can show is ingredients</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No pizzas available</p>
      )}
    </div>
  );
};

export default PizzaList;
