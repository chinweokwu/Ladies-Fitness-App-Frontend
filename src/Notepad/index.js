/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Errors from "../Notifications/Errors";
import { NOTEPADS } from "./constants";
import Note from "./Note";
import {
  Header,
  Form,
  Title,
  ToggleButton,
  Input,
  Textarea,
  Button,
} from "./style";
import Modal from "../Modal/index";

const notepadData = ({ notepads, requesting, errors }) => {
  const dispatch = useDispatch();
  const [values, setValue] = useState({
    title: "",
    body: "",
  });
  const [show, setShow] = useState(false);
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
      <Header>
        <Title> Notepads </Title>
      </Header>
      <ToggleButton onClick={() => setShow(true)}> Create Notes</ToggleButton>
      <Modal
        title="Write Down Notes"
        onClose={() => setShow(false)}
        show={show}
      >
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            onChange={handleChange}
            name="title"
            value={values.title}
            placeholder="Title"
          />
          <br></br>
          <Textarea
            type="text"
            onChange={handleChange}
            name="body"
            value={values.body}
            placeholder="Create Your Note"
          />
          <br></br>
          <Button>Submit</Button>
        </Form>
      </Modal>
      <div>
        {requesting && <span>Loading notepads...</span>}
        {!requesting && !!errors.length && (
          <Errors message="Failure to load result due to:" errors={errors} />
        )}
      </div>
      <div>
        {notepads &&
          notepads.map((notepad) => (
            <Note
              notepad={notepad}
              key={notepad}
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
  errors: state.notepads.errors,
});

export default connect(mapStateToProps)(notepadData);
