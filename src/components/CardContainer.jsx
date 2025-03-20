import { useState } from "react";
import ProductCard from "./Card/ProductCard";
import { FormatPrice } from "../utils/FormatPrice";
import './CardContainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faL, faPenToSquare, faSave } from "@fortawesome/free-solid-svg-icons";

export default function CardContainer({data}) {
    const items = data.customAttributes.productlist.items
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(null)
    const [isEdit, setIsEdit] = useState(false)
    const [editedProduct, setEditedProduct] = useState({});

    const handleClick = (id) => {
        const chosenProduct = items[id] 
        setSelected(chosenProduct)
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
        setIsEdit(false)
    }

    const handleEdit = () => {
        setIsEdit(true)
    }

    const handleChange = () => {

    }

    const handleSave = () => {
        setIsEdit(false)
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
                            {isEdit ? (
                                <div className={`content ${isEdit ? 'open' : ''}`}>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={editedProduct.name}
                                        maxLength={20} 
                                        placeholder='Tên sản phẩm'
                                        onChange={handleChange} 
                                    />
                                    <input 
                                        type="number" 
                                        name="price" 
                                        value={editedProduct.price}
                                        max={100000000}
                                        min={10000} 
                                        placeholder="Giá"
                                        onChange={handleChange} 
                                    />
                                </div>
                            ) : (
                                <div className='content'>
                                    <h2>{selected.name}</h2>
                                    <p>Price: {FormatPrice(selected.price)} đ</p>
                                </div>
                            )}
                            <p>Details: {selected.details || 'lorem'}</p>
                        </div>
                        {isEdit ? 
                        (
                            <FontAwesomeIcon icon={faSave} onClick={handleSave} className="edit"/>
                        ) : (
                            <FontAwesomeIcon icon={faPenToSquare} onClick={handleEdit} className="edit"/>
                        )}
                        <FontAwesomeIcon icon={faCircleXmark} onClick={handleClose} className="close"/>
                    </div>
                </div>
            }
        </>
    )
}