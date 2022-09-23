const ProductInfo = ({ product }) => {
    const { name, price, desc, rating } = product || {}

    return product ? (
        <>
            <ul>
                <h3>{name}</h3>
                <p>{price}</p>
                <h4>Descripion</h4>
                <p>{desc}</p>
                <p>Average rating: {rating}</p>
            </ul>
        </>
    ) : <p>Loading...</p>
}

export default ProductInfo
