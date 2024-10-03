import axios from "axios";
import { useState, useEffect } from "react";

interface Pizza {
  id: number;
  name: string;
}

const PizzaList: React.FC = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Pizza[]>(
          "http://localhost:3333/pizzas"
        );
        setPizzas(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching pizzas");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {pizza.name}
              </h2>
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
