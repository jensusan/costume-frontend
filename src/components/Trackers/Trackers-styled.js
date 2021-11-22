import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 40px;
    .title {
        font-weight: var(--extraBold);
        letter-spacing: 2px;
        text-transform: uppercase;
        font-size: 25px;
        color: var(--burgandy);
    }

`

export const Content = styled.div`


.label {
    text-transform: uppercase;
    font-weight: var(--regular);
    letter-spacing: 1px;
    color: var(--lilac);
}

.input {
    font-weight: var(--regular);
    text-transform: capitalize;
    color: var(--burgandy);
}

button {
    text-transform: uppercase;
    margin: 20px;
    letter-spacing: 1px;
    background-color: var(--burgandy);
    color: var(--lilac);
    padding: 3px 5px;
    font-weight: var(--bold);
}


`