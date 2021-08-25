/* eslint-disable radix */
import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Datepicker from 'react-datepicker';
import Errors from '../Notifications/Errors';
import CALORIES from './constants';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Form,
  Input,
  Button,
  Para,
  Card,
  CardTitle,
  CardBody,
} from './style';

const caloriesData = ({ calories, requesting, errors }) => {
  const dispatch = useDispatch();
  const [weight, setWeight] = useState(0);
  const [workoutTime, setWorkoutTime] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

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
      calories_lost: Number(caloriesLost.toPrecision(4)),
      date: selectedDate.toDateString(),
    };

    return res;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: CALORIES.CREATE, payload: calculateCalory() });
  };

  const handleWeight = (e) => {
    setWeight({ weight: e.target.value });
  };

  const handleWorkoutTime = (e) => {
    setWorkoutTime({ workoutTime: e.target.value });
  };

  const deleteItem = (id) => {
    dispatch({
      type: CALORIES.DELETE_SUCCESS,
      payload: id,
    });
  };

  return (
    <div className="m-5">
      <h1>Calories</h1>
      <Form onSubmit={handleSubmit}>
        <Para>Chose workout date</Para>
        <Datepicker
          dateFormat="yyyy-MM-dd"
          selected={Date.parse(selectedDate)}
          onChange={(date) => setSelectedDate(date)}
          required
        />
        <br />
        <Para>Your current weight</Para>
        <Input type="number" onChange={handleWeight} required />
        <br />
        <Para>Workout Time(minutes)</Para>
        <Input type="number" onChange={handleWorkoutTime} required />
        <br />
        <Button>Calculate Calories lost</Button>
      </Form>
      <div>
        {requesting && <span>Loading calories...</span>}
        {!requesting && !!errors.length && (
          <Errors message="Failure to load result due to:" errors={errors} />
        )}
      </div>
      <div>
        {calories
          && calories.map((calory) => (
            <Card key={calory.id}>
              <CardTitle>
                {' '}
                {calory.date}
                {' '}
              </CardTitle>
              <CardBody>
                {' '}
                {calory.calories_lost}
                {' '}
                calories/secs
              </CardBody>
              <Button key={calory.id} onClick={() => deleteItem(calory.id)}>
                delete
              </Button>
            </Card>
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
