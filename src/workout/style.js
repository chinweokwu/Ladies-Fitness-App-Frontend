import style from 'styled-components';

export const Container = style.div`
overflow: hidden;
display: flex;
justify-content: space-around
`;

export const FloatContainer = style.div`
padding: 5px 5px;
float: left;
width: auto;
height: auto;
box-sizing: border-box;
margin-top: 200px;
`;

export const CardImg = style.div`
display: flex;
@media only screen and (max-width: 37.5em) {
  flex-direction: column;
}
`;

export const Img = style.img`
width: 50%;
height: auto;
@media only screen and (max-width: 37.5em) {
  width: 100%;
  height: auto;
}
`;

export const Card = style.div`
background-color: dodgerblue;
color: black;
min-height: 100%; /*replace this it in width: 100%*/
width: 500px;
float: right;
@media only screen and (max-width: 37.5em) {
  width: 100%;
  margin-top: -4px;
}
`;

export const CardTitle = style.div`
font-size: 30px;
text-align: center;
font-weight: bold;
padding-top: 20px;
`;

export const CardDesc = style.div`
padding: 10px;
text-align: left;
font-size: 18px;
`;

export const CardMainSection = style.div`
`;

export const ClockHolder = style.div`
width: 100%;
background: #fff;
`;

export const StopWatch = style.div`
`;

export const Header = style.div`
position: fixed;
top: 0;
width: 100%;
height: 100px;
background-color: #2cd6e6;
text-align: center;
`;

export const Title = style.h1`
  margin-top: 20px;
  color: white;
`;

export const Message = style.div`
`;

export const StyledCarouselContainer = style.div``;

export const StyledArrowContainer = style.div``;
