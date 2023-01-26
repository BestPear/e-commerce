import styled from "styled-components";

const CreatedItem = styled.div`
  text-align: left;
`;

function DisplayCreated(props) {
  return <CreatedItem>{props.children}</CreatedItem>;
}

export default DisplayCreated;
