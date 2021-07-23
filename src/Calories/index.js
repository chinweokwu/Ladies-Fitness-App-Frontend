/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Errors from "../Notifications/Errors";
import { CALORIES } from "./constants";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Header,
  Form,
  Title,
  ToggleButton,
  Input,
  Button,
  Para,
  Card,
  CardTitle,
  CardBody,
} from "./style";
import Modal from "../Modal/index";

const caloriesData = ({ calories, requesting, errors }) => {
  const dispatch = useDispatch();
  const [weight, setWeight] = useState(0);
  const [workoutTime, setWorkoutTime] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [show, setShow] = useState(false);

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
    <div>
      <Header>
        <Title>Calories</Title>
      </Header>
      <ToggleButton onClick={() => setShow(true)}>
        Calculate Calories
      </ToggleButton>
      <Modal
        title="Calculate Calories"
        onClose={() => setShow(false)}
        show={show}
      >
        <Form onSubmit={handleSubmit}>
          <Para>Chose workout date</Para>
          <Datepicker
            dateFormat="yyyy-MM-dd"
            selected={Date.parse(selectedDate)}
            onChange={(date) => setSelectedDate(date)}
          />
          <br></br>
          <Para>Your current weight</Para>
          <Input type="number" onChange={handleWeight} />
          <br></br>
          <Para>Workout Time(minutes)</Para>
          <Input type="number" onChange={handleWorkoutTime} />
          <br></br>
          <Button>Calculate Calories lost</Button>
        </Form>
      </Modal>
      <div>
        {requesting && <span>Loading calories...</span>}
        {!requesting && !!errors.length && (
          <Errors message="Failure to load result due to:" errors={errors} />
        )}
      </div>
      <div>
        {calories &&
          calories.map((calory) => (
            <Card key={calory.id}>
              <CardTitle> {calory.date} </CardTitle>
              <CardBody> {calory.calories_lost} calories/secs</CardBody>
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
