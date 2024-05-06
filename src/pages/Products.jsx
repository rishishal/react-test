import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Products = () => {
  const [item, setItem] = useState({});
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { id } = useParams();

  const getProductData = async () => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const productData = await response.json();
    setItem(productData);
  };

  const handlePrev = () => {
    setActiveImageIndex(
      !activeImageIndex ? item?.images?.length - 1 : activeImageIndex - 1
    );
  };

  const handleNext = () => {
    setActiveImageIndex((activeImageIndex + 1) % item?.images?.length);
  };

  console.log(item);
  useEffect(() => {
    getProductData();
  }, [id]);

  return (
    <div className="flex">
      <div className="flex">
        <button onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <div className="flex justify-center">
          {item?.images?.map((url, i) => (
            <img
              key={url}
              src={url}
              alt="IMAGE"
              className={`w-96 h-64 object-contain ${
                activeImageIndex === i ? "block" : "hidden"
              }`}
            />
          ))}
        </div>
        <button onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
      <div>
        <h1>{item.title}</h1>
      </div>
    </div>
  );
};

export default Products;
