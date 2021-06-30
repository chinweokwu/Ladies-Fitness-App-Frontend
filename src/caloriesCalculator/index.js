/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import Calendar from 'react-calendar';

const Calories = () => {
  const [date, setDate] = useState(new Date());
  const [weight, setWeight] = useState(0);
  const [time, setTime] = useState(0);
  const [total, setTotal] = useState(weight + time)

  const datePicker = date => {
    setDate(date.getDate())
  }

  const handleTime = e => {
    setTime(+e.target.value)
  }

  const handleWeight = e => {
    setWeight(+e.target.value)
  }

  const totalCaloriesLost = () => {
    setTotal(weight + time)
  }

  return (
    <div>
      <form onClick={totalCaloriesLost}>
      <Calendar onChange={datePicker} value={date}/>
          Body Weight (kg)
        <input 
          type='number'
          name='weight'
          placeholder='0'
          value={weight}
          onChange={handleWeight}
        />

          Excerise Duration (minutes)
        <input 
          type='number'
          name='time'
          value={time}
          placeholder='0'
          onChange={handleTime}
        />
        <button>Calculate</button>
      </form>
      {/* {date.toString()} */}
      <h1>{total} {date.toDateString()}</h1>
    </div>
  )
}

export default Calories
