import { AiOutlineExclamationCircle } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, setOnSubmit, cancelModal } from "../utils/cartSlice";

const RemoveModal = ({ toggleOpen }) => {
  const dispatch = useDispatch();
  const onSubmit = useSelector((store) => store.allCart.onSubmit);
  const handleOnSubmit = () => {
    dispatch(setOnSubmit(!onSubmit));
    dispatch(removeItem());
  };

  const handleCancel = () => {
    dispatch(cancelModal());
  };

  return (
    <div
      className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50
    "
      onClick={toggleOpen}
    >
      <div
        className="relative p-4 w-full max-w-md bg-white rounded-lg shadow"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          onClick={toggleOpen}
        >
          <RxCross2 className="w-6 h-6" />
        </button>
        <div className="flex flex-col justify-center items-center mb-3">
          <AiOutlineExclamationCircle className="w-24 h-24 text-orange-400" />
          <h1 className="font-bold text-2xl mb-2">Are you sure?</h1>
          <p>You won&apos;t be able to revert this!</p>
        </div>
        <div className="flex justify-evenly">
          <button className="border-2 rounded-lg p-2" onClick={handleOnSubmit}>
            Yes, Remove!
          </button>
          <button className="border-2 rounded-lg p-2" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveModal;
