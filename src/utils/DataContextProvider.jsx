import { useEffect, useState } from "react";
import { DataContext } from "./useData";

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [filterData, setFilterData] = useState([]);

  const getData = async () => {
    try {
      const respnse = await fetch("https://dummyjson.com/products");
      const dummyData = await respnse.json();
      setData(dummyData);
      setFilterData(dummyData.products);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData, filterData, setFilterData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
