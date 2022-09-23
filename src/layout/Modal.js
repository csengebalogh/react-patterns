import { useState } from "react";
import styled from "styled-components"

// two styled components
const ModalBackground = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
`

const ModalBody = styled.div`
    background-color: white;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
`

function Modal ({ children }) {

    const [ shouldShow, setShouldShow ] = useState(false)

    const handleState = () => {
        setShouldShow(!shouldShow)
    }

    return (
        <>
        <button onClick={handleState}>Show Modal</button>
        {shouldShow && (<ModalBackground onClick={handleState}>
            <ModalBody onClick={e => e.stopPropagation()}>
                <button onClick={handleState}>Hide Modal</button>
                {children}
            </ModalBody>
        </ModalBackground>)}
        </>
    )

}

export default Modal
