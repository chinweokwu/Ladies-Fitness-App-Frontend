/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Errors from "../Notifications/Errors";
import { NOTEPADS } from "./constants";

const notepadData = ({ notepads, requesting, errors }) => {
  const dispatch = useDispatch();
  const [values, setValue] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    dispatch({ type: NOTEPADS.LOAD });
  }, []);

  const handleChange = (e) => {
    const val = e.target.value;
    setValue({
      ...values,
      [e.target.name]: val,
    });
  };

  const deleteItem = (id) => {
    dispatch({
      type: NOTEPADS.DELETE_SUCCESS,
      payload: id,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: NOTEPADS.CREATING,
      payload: values,
    });
    setValue({
      title: "",
      body: "",
    });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            name="title"
            value={values.title}
          />
          <textarea
            type="text"
            onChange={handleChange}
            name="body"
            value={values.body}
          />
          <button>Submit</button>
        </form>
      </div>
      <div>
        {requesting && <span>Loading notepads...</span>}
        {!requesting && !!errors.length && (
          <Errors message="Failure to load result due to:" errors={errors} />
        )}
      </div>
      <div>
        {notepads &&
          notepads.map((notepad) => (
            <div key={notepad.id}>
              <strong>{notepad.title}</strong>
              <strong>{notepad.body}</strong>
              <button key={notepad.id} onClick={() => deleteItem(notepad.id)}>
                Remove
              </button>
            </div>
          ))}{" "}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  notepads: state.notepads.list,
  requesting: state.notepads.requesting,
  errors: state.notepads.errors,
});

export default connect(mapStateToProps)(notepadData);
