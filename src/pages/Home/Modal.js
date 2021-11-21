import {Background, Wrapper} from "./Modal-styled";

const Modal = (props) => {
    return(
        <>
        <Background onClick={props.onClose}></Background>
        <Wrapper>{props.children}</Wrapper>
        </>
    )
}

export default Modal