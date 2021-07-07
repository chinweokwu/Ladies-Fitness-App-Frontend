import { NOTEPADS } from "./constants";

export const loadNotepads = () => {
  return {
    type: NOTEPADS.LOAD,
  };
};

export const getNotepads = (notepads) => {
  return {
    type: NOTEPADS.LOAD_SUCCESS,
    notepads,
  };
};

export const getError = (error) => {
  return {
    type: NOTEPADS.LOAD_ERROR,
    error,
  };
};

export const createNotepad = (notepad) => {
  return {
    type: NOTEPADS.CREATING,
    notepad,
  };
};

export const setNotepad = (notepad) => {
  return {
    type: NOTEPADS.CREATE_SUCCESS,
    notepad,
  };
};

export const errorsFromCreate = (error) => {
  return {
    type: NOTEPADS.CREATE_ERROR,
    error,
  };
};

export const deleteSuccess = (id) => {
  return {
    type: NOTEPADS.DELETE_SUCCESS,
    id,
  };
};
