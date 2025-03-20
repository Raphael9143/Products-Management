import { FormatPrice } from "../../utils/FormatPrice";

import './ProductCard.css'

export default function ProductCard({ id, name, price, imageSrc, onClick }) {
    const handleClick = (event) => {
        event.preventDefault()
        onClick(id)

    }
    return (
        <div className="product-card" onClick={handleClick}>
            <img src={imageSrc}/>
            <h2>{name}</h2>
            <p>{FormatPrice(price)} đ</p>
        </div>
    )
}