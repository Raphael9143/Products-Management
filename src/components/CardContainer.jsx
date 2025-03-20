import { useState } from "react";
import ProductCard from "./Card/ProductCard";
import { FormatPrice } from "../utils/FormatPrice";
import './CardContainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function CardContainer({data}) {
    const items = data.customAttributes.productlist.items
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(null)

    const handleClick = (id) => {
        const chosenProduct = items[id] 
        setSelected(chosenProduct)
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }
    
    return (
        <>
            <div className={data.type}>
                {items.map((element, index) => (
                    <ProductCard 
                        key={index}
                        id={index}
                        name={element.name}
                        price={element.price}
                        imageSrc={element.imageSrc}
                        onClick={handleClick}
                    />
                ))}
            </div>
            {isOpen && selected &&
                <div className={`popup`}>
                    <div className='popup-cover'>
                        <div className='popup-image'>
                            <img src={selected.imageSrc} alt={selected.name}/>
                        </div>
                        <div className='popup-content'>
                            <h2>{selected.name}</h2>
                            <p>Price: {FormatPrice(selected.price)} đ</p>
                            <p>Details: lorem</p>
                        </div>
                        <FontAwesomeIcon icon={faCircleXmark} onClick={handleClose} className="close"/>
                    </div>
                </div>
            }
        </>
    )
}