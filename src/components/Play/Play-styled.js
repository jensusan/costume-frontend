import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
        font-weight: var(--extraBold);
        letter-spacing: 2px;
        text-transform: uppercase;
        font-size: 25px;
        color: var(--darkBlue);
    }

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
    }
`

export const Wrapper = styled.div`
    margin: 20px;
    
`