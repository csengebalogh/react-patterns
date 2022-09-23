import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`

// left and right panes take up equal amounts of space
const Pane = styled.div`
    flex: 1;
`

export function SplitScreen( props ) {

    const {
        left: Left,
        right: Right
    } = props

    return (
        <Container>
            <Pane style={{ backgroundColor: 'green'}}>
                <Left /> 
            </Pane>
            <Pane>
                <Right /> 
            </Pane>
        </Container>
    )
}
