import style from 'styled-components';

export const Header = style.div`
position: fixed;
top: 0;
width: 100%;
height: 100px;
background-color: #2cd6e6;
text-align: center;
`;

export const Form = style.form`
`;

export const Title = style.h1`
  margin-top: 20px;
  color: white
`;

export const ToggleButton = style.button`
margin-top: 120px;
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

export const Input = style.input`
width: 80%;
padding: 12px;
border: 1px solid #ccc;
border-radius: 4px;
`;

export const Button = style.button`
margin-top: 5px;
width: auto;
`;

export const Para = style.p`
`;

export const Card = style.div`
   display: flex;
   justify-content: space-around;
`;

export const CardTitle = style.p`
`;

export const CardBody = style.p`
`;
