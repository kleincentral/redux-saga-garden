import { useDispatch } from "react-redux";

export default function PlantItem({ plantItem }) {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch({
      type: "SAGA/REMOVE_PLANT",
      payload: plantItem.id,
    });
  };

  return (
    <li>
      <span>{plantItem.name}</span>
      <button onClick={removeItem}>Remove</button>
    </li>
  );
}
