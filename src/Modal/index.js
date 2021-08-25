/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import "./style.css";

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(true);
  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      closeModal: () => close()
    }
  })
  const open = () => {
    setDisplay(true)
  };

  const close = () => {
    setDisplay(false)
  };

  if(display) {
   return ReactDOM.createPortal(
      <div className="modal-wrapper">
        <div onClick={close} className="modal-backdrops"/>
        <div className="modal-box">
          {props.children}
        </div>
      </div>,
    document.getElementById("modal-root"))
  }
  return null;
})

export default Modal;
