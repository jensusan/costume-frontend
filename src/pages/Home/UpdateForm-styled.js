import styled from "styled-components";

export const Wrapper = styled.div`
border-bottom: 2px solid var(--darkBlue);
text-align: center;
form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 15px 120px;
}
input {
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 2px;
}

.btn {
    text-transform: uppercase;
    letter-spacing: 1px;
    background-color: var(--lilac);
    padding: 3px 5px;
}

.del-btn {
    text-transform: uppercase;
    letter-spacing: 1px;
    background-color: var(--lilac);
    padding: 3px 5px;
    margin: 5px;
    margin-bottom: 25px;
}
`