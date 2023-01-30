import styled from "styled-components";

const GreenButton = styled.button`
  width: 10rem;
  margin-block: 0.8rem 0;
  margin-inline: 2rem;
  font-size: 1.2rem;
  background-color: green;
  
  border: 1px solid black;
  border-radius: 5px;
  transition: 0s background-color;
  padding: 0.5em 2em;

  cursor: pointer;
  &:hover {
    background-color: #1183ca;
    transition-delay: 0.1s;
  }
  &:active {
    background-color: #db5f12;
  }
`;
//#24a0ed;
//#db5f12

function ButtonGreen(props) {
  return <GreenButton onClick={props.onClick}>{props.children}</GreenButton>;
}

export default ButtonGreen;
