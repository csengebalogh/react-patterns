const SmallProductListItem = ({ product }) => {
    const { name, price } = product

    return (
        <>
            <h2>{name}</h2>
            <p>{price}</p>
        </>
    )
}

export default SmallProductListItem
