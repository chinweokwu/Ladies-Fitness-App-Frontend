/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './style.css';

function BtnDisplayClock(props) {
  return (
    <div>
      {props.status === 0 ? (
        <button
          className="stopwatch-btn stopwatch-btn-grn"
          onClick={props.start}
          type="button"
        >
          {' '}
          Start
        </button>
      ) : (
        ''
      )}
      {props.status === 1 ? (
        <div>
          <button
            className="stopwatch-btn stopwatch-btn-red"
            onClick={props.stop}
            type="button"

          >
            {' '}
            Stop
          </button>
          <button
            className="stopwatch-btn stopwatch-btn-yel"
            onClick={props.reset}
            type="button"
          >
            {' '}
            Reset
          </button>
        </div>
      ) : (
        ''
      )}

      {props.status === 2 ? (
        <div>
          <button
            className="stopwatch-btn stopwatch-btn-grn"
            onClick={props.resume}
            type="button"
          >
            {' '}
            Resume
          </button>
          <button
            className="stopwatch-btn stopwatch-btn-yel"
            onClick={props.reset}
            type="button"
          >
            {' '}
            Reset
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default BtnDisplayClock;
