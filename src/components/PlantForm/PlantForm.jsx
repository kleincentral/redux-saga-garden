import React, { useState } from "react";
import { useDispatch } from "react-redux";

const PlantForm = () => {
  const dispatch = useDispatch();

  //Initial state is an OBJECT, with keys id and name
  let [newPlant, setPlant] = useState({
    name: "",
    kingdom: "",
    clade: "",
    order: "",
    family: "",
    subfamily: "",
    genus: "",
  });

  const handleNameChange = (event, title) => {
    //Similar to in redux -- we dont want to get rid of the id field when we update name
    setPlant({ ...newPlant, [title]: event.target.value });
  };

  const addNewPlant = (event) => {
    event.preventDefault();
    dispatch({ type: "SAGA/ADD_PLANT", payload: newPlant });
    //updates the next plant to have a new id
    setPlant({
      name: "",
      kingdom: "",
      clade: "",
      order: "",
      family: "",
      subfamily: "",
      genus: "",
    });
  };
  return (
    <div>
      <form onSubmit={addNewPlant}>
        <input
          type="text"
          value={newPlant.name}
          placeholder="Name"
          onChange={() => handleNameChange(event, "name")}
        />
        <input
          type="text"
          value={newPlant.kingdom}
          placeholder="Kingdom"
          onChange={() => handleNameChange(event, "kingdom")}
        />
        <input
          type="text"
          value={newPlant.clade}
          placeholder="Clade"
          onChange={() => handleNameChange(event, "clade")}
        />
        <input
          type="text"
          value={newPlant.order}
          placeholder="Order"
          onChange={() => handleNameChange(event, "order")}
        />
        <input
          type="text"
          value={newPlant.family}
          placeholder="Family"
          onChange={() => handleNameChange(event, "family")}
        />
        <input
          type="text"
          value={newPlant.subfamily}
          placeholder="Subfamily"
          onChange={() => handleNameChange(event, "subfamily")}
        />
        <input
          type="text"
          value={newPlant.genus}
          placeholder="Genus"
          onChange={() => handleNameChange(event, "genus")}
        />
        <input type="submit" value="Add New Plant" />
      </form>
    </div>
  );
};

export default PlantForm;
