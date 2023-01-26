import styled from "styled-components";

const Input = styled.input`
  width: 3em;
  height: 2em;
  text-align: center;
`;

function InputNumber(props) {
  return <Input type="number" min="0" placeholder="0"/>;
}

export default InputNumber;
