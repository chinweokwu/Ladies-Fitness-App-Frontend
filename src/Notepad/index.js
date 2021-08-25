import React, { useEffect, useState, useRef } from 'react';
import { connect, useDispatch } from 'react-redux';
import NOTEPADS from './constants';
import Note from './Note';
import validation from './validation';
import {
  Form,
  Input,
  Textarea,
  Button,
  ToggleButton,
} from './style';
import Modal from '../Modal/index';

const notepadData = ({ notepads, requesting }) => {
  const dispatch = useDispatch();
  const [err, setErr] = useState({});
  const [values, setValue] = useState({
    title: '',
    body: '',
  });
  const modalRef = useRef();
  const openModal = () => {
    modalRef.current.openModal();
  };

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
      title: '',
      body: '',
    });
  };

  return (
    <div className="m-5">
      <h1> Notepads </h1>
      <ToggleButton onClick={openModal}> Create Notes</ToggleButton>
      <Modal ref={modalRef}>
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
          <br />
          <Textarea
            type="text"
            onChange={handleChange}
            name="body"
            value={values.body}
            placeholder="Create Your Note"
            required
          />
          {err.body && <p className="err">{err.body}</p>}
          <br />
          <Button>Submit</Button>
        </Form>
        <ToggleButton onClick={() => modalRef.current.closeModal()} className="btnClose">Close</ToggleButton>
      </Modal>
      <div>
        {requesting && <span>Loading notepads...</span>}
      </div>
      <div>
        {notepads
          && notepads.map((notepad) => (
            <Note
              notepad={notepad}
              key={notepad.id}
              deleteItem={() => deleteItem(notepad.id)}
            />
          ))}
        {' '}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  notepads: state.notepads.list,
  requesting: state.notepads.requesting,
});

export default connect(mapStateToProps)(notepadData);
