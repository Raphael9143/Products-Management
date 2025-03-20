import { FormatPrice } from "../../utils/FormatPrice";

export default function ProductCard({ name, price, imageSrc }) {
    return (
        <div className="product-card">
            <img src={imageSrc}/>
            <h2>{name}</h2>
            <p>{FormatPrice(price)} đ</p>
        </div>
    )
}