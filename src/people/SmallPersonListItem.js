export const SmallPersonListItem = ({person}) => {
    const { name, age} = person

    return (
        <p>Name: {name}, {age} years</p>
    )
}
