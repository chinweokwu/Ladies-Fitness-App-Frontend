/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Errors from "../Notifications/Errors";
import { CALORIES } from "./constants";

const caloriesData = ({ calories, requesting, errors }) => {
  const dispatch = useDispatch();
  const [weight, setWeight] = useState(0);
  const [workoutTime, setWorkoutTime] = useState(0);

  useEffect(() => {
    dispatch({ type: CALORIES.LOAD });
  }, []);

  const calculateCalory = () => {
    const setCurrentWeight = weight;
    const setCurrentTime = workoutTime;
    const calWeight = parseInt(setCurrentWeight.weight);
    const calTime = parseInt(setCurrentTime.workoutTime) * 60;
    const caloriesLost = calWeight / calTime;
    const res = {
      calories_lost: caloriesLost,
    };

    return res;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: CALORIES.CREATE, payload: calculateCalory });
  };

  const handleWeight = (e) => {
    setWeight({ weight: e.target.value });
  };

  const handleWorkoutTime = (e) => {
    setWorkoutTime({ workoutTime: e.target.value });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="number" onChange={handleWeight} />
          <input type="number" onChange={handleWorkoutTime} />
          <button>Calculate Calories lost</button>
        </form>
      </div>
      <div>
        {requesting && <span>Loading calories...</span>}
        {!requesting && !!errors.length && (
          <Errors message="Failure to load result due to:" errors={errors} />
        )}
      </div>
      <div>
        {calories?.map((calory) => (
          <div key={calory.id}>
            <strong>{`${calory.calories_lost}`} calories/secs</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  calories: state.calories.list,
  requesting: state.calories.requesting,
  errors: state.calories.errors,
});

export default connect(mapStateToProps)(caloriesData);
