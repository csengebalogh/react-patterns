import styled from 'styled-components'

const Container = styled.div`
    display: flex
`

// left and right panes take up equal amounts of space
const Pane = styled.div`
    flex: ${props => props.weight}
`

export function SplitScreen( props ) {

    const {
        children,
        leftWeight,
        rightWeight
    } = props

    const [ left, right ] = children

    return (
        <Container>
            <Pane 
                weight={leftWeight} 
                style={{backgroundColor: '#e9c46a'}}
            >
                {left}
            </Pane>
            <Pane 
                weight={rightWeight}
                style={{backgroundColor: '#dda15e'}}
            >
                {right}
            </Pane>
        </Container>
    )
}
