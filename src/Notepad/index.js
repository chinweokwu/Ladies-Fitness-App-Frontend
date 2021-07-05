/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Errors from "../Notifications/Errors";
import { NOTEPADS } from "./constants";

const caloriesData = ({ notepads, requesting, errors }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    dispatch({ type: NOTEPADS.LOAD });
  }, []);

  const notepad = () => {
    const notepadTitle = title;
    const notepadBody = body;
    const res = {
      title: notepadTitle,
      body: notepadBody,
    };

    return res;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: NOTEPADS.CREATING, payload: notepad });
  };

  const handleTitle = (e) => {
    setTitle({ title: e.target.value });
  };

  const handleBody = (e) => {
    setBody({ body: e.target.value });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleTitle} />
          <input type="text" onChange={handleBody} />
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
        {notepads?.map((notepad) => (
          <div key={notepad.id}>
            <strong>{`${notepad.title}`}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  notepads: state.notepads.list,
  requesting: state.notepads.requesting,
  errors: state.notepads.errors,
});

export default connect(mapStateToProps)(caloriesData);
