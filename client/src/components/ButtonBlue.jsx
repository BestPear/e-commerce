import styled from "styled-components";

const BlueButton = styled.button`
  width: 10rem;
  margin-block: 0.8rem 0;
  margin-inline: 2rem;
  font-size: 1.2rem;
  background-color: #24a0ed;
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

function ButtonBlue(props) {
  return <BlueButton onClick={props.onClick}>{props.children}</BlueButton>;
}

export default ButtonBlue;
