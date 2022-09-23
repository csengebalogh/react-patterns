const NumberedList = ({ 
    items, 
    resourceName, 
    itemComponent: ItemComponent
 }) => {
    return (
        <>
            
            {items.map((item, i) => (
                <div key={i}>
                <h3 style={{ backgroundColor: 'green'}}>{i + 1}</h3>
                <ItemComponent {...{ [resourceName]:  item}}/>
                </div>
            ))}
        </>
    )
}

export default NumberedList
