import axios from "axios";
import { pizzaInterface } from "../interface/pizzaInterface";

const URL = "http://localhost:3333/pizzas";

export const sendPizza = async (data: pizzaInterface) => {
  try {
    await axios.post(URL, data);
  } catch (error) {
    console.error(error);
  }
};

export const deletePizza = async (id: number) => {
  try {
    await axios.delete(URL + "/" + id);
  } catch (error) {
    console.error(error);
  }
};

export const getPizzas = async () => {
  try {
    const response = await axios.get<pizzaInterface[]>(
      "http://localhost:3333/pizzas"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
