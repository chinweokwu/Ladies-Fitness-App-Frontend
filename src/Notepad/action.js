import NOTEPADS from './constants';

export const loadNotepads = () => ({
  type: NOTEPADS.LOAD,
});

export const getNotepads = (notepads) => ({
  type: NOTEPADS.LOAD_SUCCESS,
  notepads,
});

export const getError = (error) => ({
  type: NOTEPADS.LOAD_ERROR,
  error,
});

export const createNotepad = (notepad) => ({
  type: NOTEPADS.CREATING,
  notepad,
});

export const setNotepad = (notepad) => ({
  type: NOTEPADS.CREATE_SUCCESS,
  notepad,
});

export const errorsFromCreate = (error) => ({
  type: NOTEPADS.CREATE_ERROR,
  error,
});

export const deleteSuccess = (id) => ({
  type: NOTEPADS.DELETE_SUCCESS,
  id,
});
