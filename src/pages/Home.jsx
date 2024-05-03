import Card from "../components/Card";
import Dropdown from "../components/Dropdown";
import { DataContext } from "../utils/useData";
import { useContext } from "react";
const Home = () => {
  const { data } = useContext(DataContext);
  const filteroption = [...new Set(data?.products?.map((cat) => cat.category))];
  // const filteroption = [data?.products?.map(cat => cat.category)];
  return (
    <div>
      <Dropdown filteroption={filteroption} />
      <Card />
    </div>
  );
};

export default Home;
