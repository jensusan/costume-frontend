import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;
    .title {
        font-weight: var(--extraBold);
        letter-spacing: 2px;
        text-transform: uppercase;
        font-size: 25px;
        color: var(--darkBlue);
        
    }

    .main-title {
        font-weight: var(--extraBold);
        text-transform: uppercase;
        letter-spacing: 4px;
        border-bottom: 3px solid var(--lightBlue);
        padding-bottom: 20px;
        color: var(--darkBlue);
        text-shadow: 2px 2px 2px var(--lightBlue);
    }

`

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border-bottom: 2px solid var(--lightBlue);

.label {
    text-transform: uppercase;
    font-weight: var(--thin);
    letter-spacing: 1px;
    color: var(--lightBlue);
}

.input {
    font-weight: var(--regular);
    text-transform: capitalize;
    color: var(--darkBlue);
}

.play-img {
    width: 60vw;
    padding-bottom: 20px;
}

`