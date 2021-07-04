/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Errors from "../Notifications/Errors";
import { CALORIES } from "./constants";

const caloriesData = ({ calories, requesting, errors }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: CALORIES.LOAD });
  }, []);

  return (
    <div>
      <div>
        {requesting && <span>Loading workouts...</span>}
        {!requesting && !!errors.length && (
          <Errors message="Failure to load result due to:" errors={errors} />
        )}
      </div>
      <div>
        {calories?.map((calory) => (
          <div key={calory.id}>
            <strong>{`${calory.score}`}</strong>
            {/* <strong>{`${workout.img_url}`}</strong> */}
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
