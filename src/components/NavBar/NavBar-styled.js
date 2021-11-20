import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 40px 20px;
    
`

export const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    text-transform: uppercase;
    letter-spacing: 1px;
    
    a {
        color: var(--darkBlue);
    }

    a:hover {
        color: var(--lightBlue);
    }

`