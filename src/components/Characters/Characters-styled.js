import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 30px;
    .title {
        font-weight: var(--extraBold);
        letter-spacing: 2px;
        text-transform: uppercase;
        font-size: 25px;
        color: var(--darkGreen);
        text-align: center;
        margin-bottom: 50px;
    }

    button {
        text-transform: uppercase;
        margin: 20px;
        letter-spacing: 1px;
        background-color: var(--darkGreen);
        padding: 3px 5px;
        font-weight: var(--bold);
    }
`

export const Content = styled.div`
    padding-bottom: 50px;
    border-top: solid 1px var(--lightGreen);
    .label {
        text-transform: uppercase;
        font-weight: var(--thin);
        letter-spacing: 1px;
        color: var(--lightGreen);
        padding-top: 10px;
    }

    .input {
        font-weight: var(--regular);
        text-transform: capitalize;
        color: var(--darkGreen);
        padding-top: 0px;
    }

    .img {
        width: 60vw;
    }

  
`