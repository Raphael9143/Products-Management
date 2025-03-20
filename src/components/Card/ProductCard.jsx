export default function ProductCard({ name, price, imageSrc }) {
    return (
        <div className="product-card">
            <img src={imageSrc}/>
            <h2>{name}</h2>
            <p>{price} đ</p>
        </div>
    )
}