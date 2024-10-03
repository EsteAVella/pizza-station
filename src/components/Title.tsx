import NavBar from "./NavBar";
import PizzaList from "./PizzaList";

const Title: React.FC = () => {
  return (
    <div className="text-center my-8">
      <NavBar />
      <PizzaList />
    </div>
  );
};

export default Title;
