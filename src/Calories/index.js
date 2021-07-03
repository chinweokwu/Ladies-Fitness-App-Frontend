/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import './styles.css';
import{ DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { connect, useDispatch } from 'react-redux';
import Errors from '../Notifications/Errors';
import { CALORIES_LOADING, CALORIES_CREATING } from './constants'

const Calories = ({ list, requesting, errors }) => {
  console.log(list)
  const dispatch = useDispatch()
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weight, setCurrentWeight] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(()=>{
    dispatch({type: CALORIES_LOADING })
  }, [])

  const calculateCalories = () =>{
    const weights = weight;
    const calWeight = parseInt(weights.weight)
    const exceriseTime= time
    const calTime = (parseInt(exceriseTime.time) * 60)
    const caloriesLoss = calWeight/calTime
    const day= currentDate.toDateString();
    const res = {
      date: day,
      calories_lost: caloriesLoss
    }
    return res
  }
  const handleSubmit = e => {
    e.preventDefault()
    dispatch({type: CALORIES_CREATING, payload: calculateCalories})
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

  const deleteCalory = (id) =>{
    dispatch({type: 'CALORY_DELETE', payload: id})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <DatePickerComponent format="dd-MMM-yy" onChange={handleCurrentDate}></DatePickerComponent>
        <input type='number' onChange={handleWeight} />
        <input type='number' onChange={handleTime} />
        <button>clickme</button>
      </form>
      <div>
        {requesting && <span>Creating Loss...</span>}
        {!requesting && !!errors.length && (
          <Errors message="Failure to create calory result due to:" errors={errors} />
        )}
      </div>
      <hr />
          <div>
          {
            list.map(calory => (
              <div key={calory.id}>
                <strong>{`${calory.date}`}</strong>
                <strong>{`${calory.calories_lost}`}</strong>
                <button onclick={() => {deleteCalory(calory.id)}}></button>
              </div>
            ))
          }
        </div>
    </div>
  )
};

const mapStateToProps = state => ({
  list: state.calories.list,
  requesting: state.calories.requesting,
  errors: state.calories.errors,
})

export default connect(mapStateToProps)(Calories);

