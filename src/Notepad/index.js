/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { NOTEPADS } from "./constants";
import Note from "./Note";
import validation from './validation';
import {
  Form,
  Input,
  Textarea,
  Button,
} from "./style";

const notepadData = ({ notepads, requesting }) => {
  const dispatch = useDispatch();
  const [err, setErr] =  useState({})
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

    setErr(validation(values));
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
    <div className="m-5">
 
        <h1> Notepads </h1>
 
             <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            onChange={handleChange}
            name="title"
            value={values.title}
            placeholder="Title"
            required
          />
          {err.title && <p className="err">{err.title}</p>}
          <br></br>
          <Textarea
            type="text"
            onChange={handleChange}
            name="body"
            value={values.body}
            placeholder="Create Your Note"
            required
          />
          {err.body && <p className="err">{err.body}</p>}
          <br></br>
          <Button>Submit</Button>
        </Form>
      <div>
        {requesting && <span>Loading notepads...</span>}
      </div>
      <div>
        {notepads &&
          notepads.map((notepad) => (
            <Note
              notepad={notepad}
              key={notepad.id}
              deleteItem={() => deleteItem(notepad.id)}
            />
          ))}{" "}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  notepads: state.notepads.list,
  requesting: state.notepads.requesting,
});

export default connect(mapStateToProps)(notepadData);
