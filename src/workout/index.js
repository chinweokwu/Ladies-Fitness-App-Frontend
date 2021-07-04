/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Errors from "../Notifications/Errors";
import { WORKOUTS } from "./constants";

const workoutsData = ({ workouts, requesting, errors }) => {
  console.log(errors);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: WORKOUTS.LOAD });
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
        {workouts.map((workout) => (
          <div key={workout.id}>
            <strong>{`${workout.score}`}</strong>
            {/* <strong>{`${workout.img_url}`}</strong> */}
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  workouts: state.workouts.list,
  requesting: state.workouts.requesting,
  errors: state.workouts.errors,
});

export default connect(mapStateToProps)(workoutsData);
