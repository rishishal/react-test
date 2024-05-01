import { useParams } from "react-router-dom";

const Products = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Product ID:{id}</h1>
    </div>
  );
};

export default Products;
