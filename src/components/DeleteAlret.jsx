import { RiDeleteBin6Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setConfirm, confirmDelete, cancelDelete } from "../utils/cartSlice";

const DeleteAlret = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const Confirm = useSelector((store) => store.allCart.confirm);

  const handleConfirm = () => {
    dispatch(setConfirm(!Confirm));
    dispatch(confirmDelete());
  };

  const handleCancel = () => {
    dispatch(cancelDelete());
  };

  return (
    <div
      id="deleteModal"
      className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
      onClick={toggleModal}
    >
      <div
        className="relative p-4 w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal content */}
        <button
          onClick={toggleModal}
          className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <RxCross2 className="w-6 h-6" />
          <span className="sr-only">Close modal</span>
        </button>
        <div className="flex flex-col items-center justify-center">
          <RiDeleteBin6Fill className="w-24 h-24 m-4 text-gray-400 " />
          <p className="mb-4 text-gray-500 dark:text-gray-300">
            Are you sure you want to delete this item?
          </p>
        </div>

        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={handleCancel}
            className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            type="button"
          >
            No, cancel
          </button>
          <button
            onClick={handleConfirm}
            className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Yes, I&apos;m sure
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAlret;
