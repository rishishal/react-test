import { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState({});
  const [filter, setFilterData] = useState({});

  const getData = async () => {
    try {
      const respnse = await fetch("https://dummyjson.com/products");
      const dummyData = await respnse.json();
      setData(dummyData);
      setFilterData(dummyData);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Card filterData={filter} />
    </div>
  );
};

export default Home;
