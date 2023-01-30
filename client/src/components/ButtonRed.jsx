import styled from "styled-components";

const RedButton = styled.button`
  width: 10rem;
  margin-block: 0.8rem 0;
  margin-inline: 2rem;
  font-size: 1.2rem;
  background-color: #BB3B35;
  border: 1px solid black;
  border-radius: 5px;
  transition: 0s background-color;
  padding: 0.5em 2em;

  cursor: pointer;
  &:hover {
    background-color: #D54D52;
    transition-delay: 0.1s;
  }
  &:active {
    background-color: #D02E30;
  }
`;

function ButtonRed(props) {
  return <RedButton onClick={props.onClick}>{props.children}</RedButton>;
}

export default ButtonRed;
