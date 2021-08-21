/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Errors from "../Notifications/Errors";
import { WORKOUTS } from "./constants";
import BtnClock from "../Clock/BtnDisplayClock";
import DisplayClock from "../Clock/DisplayClock";
import ImageSlider from "../carousel/imageSlider";
import {
  ClockHolder,
  StopWatch,
  Header,
  Title,
  Message,
} from "./style";

const workoutsData = ({ workouts, requesting, errors }) => {
  const dispatch = useDispatch();
  const [time, setTime] = useState({
    ms: 0,
    s: 0,
    m: 0,
    h: 0,
  });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  useEffect(() => {
    dispatch({ type: WORKOUTS.LOAD });
  }, []);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };
  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({
      ms: updatedMs,
      s: updatedS,
      m: updatedM,
      h: updatedH,
    });
  };
  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({
      ms: 0,
      s: 0,
      m: 0,
      h: 0,
    });
  };

  const resume = () => start();

  return (
    <div>
      <Header>
        <Title> Workouts </Title>
        <ClockHolder>
          <StopWatch>
            <DisplayClock time={time} />
            <BtnClock
              status={status}
              resume={resume}
              reset={reset}
              stop={stop}
              start={start}
            />
          </StopWatch>
        </ClockHolder>
        <Message>
          {requesting && <span>Loading workouts...</span>}
          {!requesting && !!errors.length && (
            <Errors message="Failure to load result due to:" errors={errors} />
          )}
        </Message>
      </Header>
      <ImageSlider workouts={workouts} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  workouts: state.workouts.list,
  requesting: state.workouts.requesting,
  errors: state.workouts.errors,
});

export default connect(mapStateToProps)(workoutsData);
