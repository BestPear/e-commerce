import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 8vh;
    font-size: 1.1rem;
    background-color: black;
    color: white;
`;

function Footer() {
    return (
        <Container>
            <p>
                This was made by
                Anita and Asif and updated with <span className="heart">&hearts;</span> by Sofia and Mehmet.
            </p>
        </Container>
    );
}

export default Footer;
