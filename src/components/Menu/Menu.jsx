import { useContext, useState } from "react";
import FormElement from "../Form/AddForm/SubForm/InfoForm";
import { ProductsContext } from "../Context/ProductsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCircleMinus, faCirclePlus, faFilter, faL, faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";

import './Menu.css'

export default function CreateProductForm({ data }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isAdding, setIsAdding] = useState(false)
    const [isSearching, setIsSearching] = useState(false)
    const [isFiltering, setIsFiltering] = useState(false)

    const { setData } = useContext(ProductsContext);
    const formData = data[1].customAttributes.form;
    const buttonData = data[2];
    const emptyImageSrc = 'https://media.istockphoto.com/id/1441026821/vector/no-picture-available-placeholder-thumbnail-icon-illustration.jpg?s=612x612&w=0&k=20&c=7K9T9bguFyJyKOTvPkdoTWZYRWA3zGvx_xQI53BT0wg='

    const handleSubmit = (event) => {
        event.preventDefault();
        const newProduct = {
            name: event.target.productName.value,
            price: event.target.price.value,
            imageSrc: event.target.imageUrl.files[0] ? URL.createObjectURL(event.target.imageUrl.files[0]) : emptyImageSrc
        };

        console.log(newProduct)

        setData(prevData => {
            if (!prevData) return prevData;

            const updatedProductList = prevData.data[3].customAttributes.productlist.items
                ? [newProduct, ...prevData.data[3].customAttributes.productlist.items]
                : [newProduct];

            return {
                ...prevData,
                data: prevData.data.map((item, index) => {
                    if (index === 3) {
                        return {
                            ...item,
                            customAttributes: {
                                ...item.customAttributes,
                                productlist: {
                                    ...item.customAttributes.productlist,
                                    items: updatedProductList
                                }
                            }
                        };
                    }
                    return item;
                })
            };
        });
    };

    const handleClick = (event) => {
        event.preventDefault()
        setIsOpen(!isOpen)
    }

    return (
        <div className="menu">
            <div className={`menu-button-cover ${isOpen ? 'open' : ''}`}>
                <div className={`menu-button ${isOpen ? 'open' : ''}`}>
                    <FontAwesomeIcon icon={!isOpen ? faCirclePlus : faCircleMinus} className={`option-button ${isOpen ? 'plus': 'minus'}`} onClick={handleClick}/>
                    {isOpen && 
                        <div className='sub-button'>
                            <FontAwesomeIcon icon={faPlus} />
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            <FontAwesomeIcon icon={faFilter}/>
                        </div>
                    }
                </div>
            </div>
            <div className='form-cover'>
                <form className={data.type} onSubmit={handleSubmit}>
                    {formData.map((element, index) => (
                        <FormElement
                            key={index}
                            label={element.label}
                            name={element.name}
                            inputType={element.type}
                            required={element.required}
                            maxLength={element.maxLength}
                            minValue={element.minValue}
                            maxValue={element.maxValue}
                        />
                    ))}
                    <button type='submit'>{buttonData.customAttributes.button.text}</button>
                </form>
            </div>
            
        </div>
    );
}