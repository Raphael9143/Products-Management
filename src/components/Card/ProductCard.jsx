import { FormatPrice } from "../../utils/FormatPrice";

import '../../assets/styles/ProductCard.css'

export default function ProductCard({ id, className, name, price, imageSrc, onClick }) {
    const handleClick = (event) => {
        event.preventDefault()
        onClick(id)

    }
    return (
        <div className={`${className ? className : 'product-card'}`} onClick={handleClick}>
            <img src={imageSrc}/>
            <h2>{name}</h2>
            <p>{FormatPrice(price)} đ</p>
        </div>
    )
}