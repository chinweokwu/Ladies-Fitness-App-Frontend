import style from "styled-components";

export const Header = style.div`
position: fixed;
top: 0;
width: 100%;
height: 100px;
background-color: #2cd6e6;
text-align: center;
`;

export const Form = style.form`
  display: block;
`;

export const Title = style.h1`
  margin-top: 20px;
  color: white
`;

export const ToggleButton = style.button`
  margin-top: 150px;
  border: 2px solid #00aba9;
  color: #00aba9;
  background: #fff;
  padding: 12px 13px;
  font-size: 13px;
  text-transform: uppercase;
  width: auto;
  transition: background 1s;
  cursor: pointer;
  &:hover{
    background: #00aba9;
    border: 2px solid #00aba9;
    color: #fff;
  }
`;

export const Textarea = style.textarea`
width: 80%;
height: 200px;
padding: 12px;
border: 1px solid #ccc;
border-radius: 4px;
margin-top: 10px;
`;

export const Input = style.input`
width: 80%;
padding: 12px;
border: 1px solid #ccc;
border-radius: 4px;
`;

export const Button = style.button`
margin-top: 5px;
width: 100px;
`;

export const CardContainer = style.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;

export const Card = style.div`
margin: 20px;
padding: 20px;
width: 500px;
min-height: 200px;
border-radius: 10px;
box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
transition: all 0.5s;
`;

export const CardTitle = style.h2`
  text-align: center;
`;

export const CardBody = style.p`
  font-size: 20px;
`;

export const DeleteButton = style.button`
`;
