import styled from "styled-components";

const OrangeButton = styled.button`
  width: 10rem;
  margin-block: 0.5rem 0;
  margin-inline: 2rem;
  font-size: 1.2rem;
  background-color: #dc7300;
  border-radius: 5px;
  transition: 0s background-color;

  cursor: pointer;
  &:hover {
    background-color: #e05404;
    transition-delay: 0.1s;
  }
  &:active {
    background-color: #7f1917;
  }
`;

function ButtonOrange(props) {
  return <OrangeButton onClick={props.onClick}>{props.children}</OrangeButton>;
}

export default ButtonOrange;
