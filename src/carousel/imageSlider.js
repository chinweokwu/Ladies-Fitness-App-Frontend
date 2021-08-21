/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import "./style.css";

const ImageSlider = ({workouts}) => {
  const [current, setCurrent] = useState(0);
  const length = workouts.length;

  if(!Array.isArray(workouts) || workouts.length <= 0){
    return null;
  }

  const nextSlide =() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide =() => {
    setCurrent(current === 0 ? length - 1  : current -  1);
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
      {workouts.map((slide, idx) => {
        return(
          <div className={idx === current ? 'slide active' : 'slide'} key={slide.id}>
            {idx ===  current && (
              <>
                <img src={slide.attributes.img_url} alt="" className="img" />
                <p>{`${slide.attributes.title}`}</p>
              </>
            )}
          </div>
        )
      })}
    </section>
  )
}

export default ImageSlider