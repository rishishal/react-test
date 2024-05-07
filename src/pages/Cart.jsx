import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
const Cart = () => {
  const items = useSelector((store) => store.allCart.cart);

  console.log(items);

  return (
    <div className="flex flex-col max-w-5xl m-auto p-6 space-y-4 m-x-10 dark:bg-gray-50 dark:text-gray-800">
      <h2 className="text-xl font-semibold">Your cart</h2>
      <ul className="flex flex-col divide-y dark:divide-gray-300">
        {items.map((product) => (
          <li
            key={product.id}
            className="flex flex-col py-6 sm:flex-row sm:justify-between"
          >
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                src={product.thumbnail}
                alt={product.title}
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      {product.title}
                    </h3>
                    <p className="text-sm dark:text-gray-600">
                      {product.category}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">
                      ₹
                      {Math.floor(
                        product.price -
                          product.price * (product.discountPercentage / 100)
                      )}
                    </p>
                    <p className="text-sm line-through dark:text-gray-400">
                      ₹{product.price}
                    </p>
                  </div>
                </div>
                <div className="flex text-sm divide-x">
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 pl-0 space-x-1"
                  >
                    <MdDelete />
                    <span>Remove</span>
                  </button>

                  <div className="flex justify-center items-center w-1/5">
                    {/* Decrease Quantity */}
                    <FaMinus />
                    <input
                      className="mx-2 border text-center w-8"
                      type="text"
                      value="1"
                    />
                    {/* Increase Quantity */}
                    <FaPlus />
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold">₹ 357</span>
        </p>
        <p className="text-sm dark:text-gray-600">
          Not including taxes and shipping costs
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-6 py-2 border rounded-md dark:border-violet-600"
        >
          Back
          <span className="sr-only sm:not-sr-only">to shop</span>
        </button>
        <button
          type="button"
          className="px-6 py-2 border rounded-md dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600"
        >
          <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
