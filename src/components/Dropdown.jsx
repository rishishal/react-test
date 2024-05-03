import { DataContext } from "../utils/useData";
import { useContext } from "react";

const Dropdown = ({ filteroption }) => {
  const { data, filterData, setFilterData } = useContext(DataContext);

  const handleValue = (e) => {
    setFilterData(
      data?.products?.filter((newItem) => newItem.category === e.target.value)
    );
    if (e.target.value === "all") {
      setFilterData(data.products);
    }
  };
  console.log(filterData);

  return (
    <select
      className="m-3 p-1 border-2 border-black rounded-lg"
      onChange={handleValue}
    >
      {filteroption.map((catItem, index) => (
        <option
          key={index}
          value={catItem}
          className="font-semibold p-1 capitalize"
        >
          {catItem}
        </option>
      ))}
      <option value="all" className="font-semibold p-1 capitalize">
        All
      </option>
    </select>
  );
};

export default Dropdown;
