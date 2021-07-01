/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import './styles.css';
import{ DatePickerComponent } from '@syncfusion/ej2-react-calendars';

const Calories = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weight, setCurrentWeight] = useState(0);
  const [time, setTime] = useState(0);

  const handleSubmit = e => {
    e.preventDefault()
    const weights = weight;
    const date= currentDate.toDateString();
    const times= time
    console.log(date)
    console.log(times)
    console.log(weights)
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

export default Calories
