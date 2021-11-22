import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 30px;
    .title {
        font-weight: var(--extraBold);
        letter-spacing: 2px;
        text-transform: uppercase;
        font-size: 25px;
        color: var(--darkOrange);
    }

   button {
    text-transform: uppercase;
    margin: 20px;
    letter-spacing: 1px;
    background-color: var(--darkOrange);
    padding: 3px 5px;
    font-weight: var(--bold);
   }
`

export const Content = styled.div`
    color: var(--lightOrange);
`