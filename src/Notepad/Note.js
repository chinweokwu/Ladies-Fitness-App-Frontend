import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  DeleteButton,
  CardContainer,
} from "./style";

const Note = ({ notepad, deleteItem }) => {
  return (
    <CardContainer>
      <Card key={notepad.id}>
        <CardTitle>{notepad.title}</CardTitle>
        <CardBody>{notepad.body}</CardBody>
        <DeleteButton key={notepad.id} onClick={deleteItem}>
          Remove
        </DeleteButton>
      </Card>
    </CardContainer>
  );
};

export default Note;
