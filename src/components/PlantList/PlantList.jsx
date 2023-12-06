import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlantItem from "../PlantItem/PlantItem";

function PlantList() {
  useEffect(() => {
    getPlants();
  }, []);

  const dispatch = useDispatch();

  const getPlants = () => {
    dispatch({
      type: "SAGA/GET_PLANT",
    });
  };

  const reduxState = useSelector((store) => store.plantList);

  return (
    <div>
      <h3>Our Plants</h3>
      {reduxState.map((plantItem) => {
        return <PlantItem key={plantItem.id} plantItem={plantItem} />;
      })}
    </div>
  );
}

export default PlantList;
