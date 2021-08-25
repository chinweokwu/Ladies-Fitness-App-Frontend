/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-use-before-define */
/* eslint-disable react/display-name */
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(true);
  useImperativeHandle(ref, () => ({
    openModal: () => open(),
    closeModal: () => close(),
  }));
  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  if (display) {
    return ReactDOM.createPortal(
      <div className="modal-wrapper">
        <div onClick={close} className="modal-backdrops" />
        <div className="modal-box">
          {props.children}
        </div>
      </div>,
      document.getElementById('modal-root'),
    );
  }
  return null;
});

export default Modal;
