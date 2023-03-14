import styled from "styled-components";

const CreatedItem = styled.div`
    text-align: left;
    width: 80%;
    background-color: white;
    padding: 2%;
    // border: 1px solid black;
`;

function DisplayCreated(props) {
    return <CreatedItem>{props.children}</CreatedItem>;
}

export default DisplayCreated;
