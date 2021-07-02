/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import './styles.css';
import{ DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { connect } from 'react-redux';

const Calories = ({ list, successful, requesting, errors }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weight, setCurrentWeight] = useState(0);
  const [time, setTime] = useState(0);

  const calculateCalories = () =>{
    const weights = weight;
    const date= currentDate.toDateString();
    const times= time * 60
    const caloriesLoss = weights/times
    console.log(date)
    console.log(caloriesLoss)
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log(calculateCalories)
  }
  const handleWeight = e => {
    setCurrentWeight({weight: e.target.value})
  }
  const handleTime = e => {
    setTime({time: e.target.value})
  }
  const handleCurrentDate = () => {
    setCurrentDate(currentDate)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <DatePickerComponent format="dd-MMM-yy" onChange={handleCurrentDate}></DatePickerComponent>
        <input type='number' onChange={handleWeight}/>
        <input type='number' onChange={handleTime}/>
        <button>clickme</button>
      </form>
    </div>
  )
};

const mapStateToProps = state => ({
  list: state.calories.list,
  requesting: state.calories.requesting,
  successful: state.calories.successful,
  errors: state.calories.errors,
})

export default connect(mapStateToProps)(Calories);

