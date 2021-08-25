/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  DeleteButton,
  CardContainer,
} from './style';

const Note = ({ notepad, deleteItem }) => (
  <CardContainer>
    <Card key={notepad}>
      <CardTitle>{notepad.title}</CardTitle>
      <CardBody>{notepad.body}</CardBody>
      <DeleteButton key={notepad.id} onClick={deleteItem}>
        Remove
      </DeleteButton>
    </Card>
  </CardContainer>
);

export default Note;
