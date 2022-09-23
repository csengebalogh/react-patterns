export const LargeProductListItem = ({ product}) => {
    const { name, price, desc, rating } = product

    return (
        <>
            <ul>
                <h3>{name}</h3>
                <p>{price}</p>
                <h4>Descripion</h4>
                <p>{desc}</p>
                <p>Average rating: {rating}</p>
            </ul>
        </>
    )
}