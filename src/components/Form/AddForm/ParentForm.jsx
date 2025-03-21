import { useContext, useRef, useState } from "react";
import FormElement from "./SubForm/InfoForm";
import { ProductsContext } from "../../Context/ProductsContext";

import './ParentForm.css'
import ProductCard from "../../Card/ProductCard";
import { Switch } from "@mui/material";
import { FormatPrice } from "../../../utils/FormatPrice";
export default function ParentForm({ data, setAlertMessage, action }) {
    const { setData } = useContext(ProductsContext);
    const formData = data[1].customAttributes.form;
    const buttonData = data[2];
    const emptyImageSrc = 'https://media.istockphoto.com/id/1441026821/vector/no-picture-available-placeholder-thumbnail-icon-illustration.jpg?s=612x612&w=0&k=20&c=7K9T9bguFyJyKOTvPkdoTWZYRWA3zGvx_xQI53BT0wg='

    const [product, setProduct] = useState({productName: '', price: '', imageUrl: emptyImageSrc})
    const [isAddingMultiple, setIsAddingMultiple] = useState(false)

    const fileInputRef = useRef(null)

    const handleChange = (event) => {
        const { name, value, files } = event.target
        setProduct(prevState => ({
            ...prevState,
            [name]: files ? URL.createObjectURL(files[0]) : value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newProduct = {
            name: event.target.productName.value,
            price: event.target.price.value,
            imageSrc: event.target.imageUrl.files[0] ? URL.createObjectURL(event.target.imageUrl.files[0]) : emptyImageSrc
        };

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

        setAlertMessage(`Thêm thành công sản phẩm: ${newProduct.name}, giá: ${FormatPrice(newProduct.price)} đ!`)

        setTimeout(() => {
            setAlertMessage(null)
        }, 2000)
        if (!isAddingMultiple) {
            action()
        }

        setProduct({productName: '', price: '', imageUrl: emptyImageSrc})
    
        if (fileInputRef.current) {
            fileInputRef.current.value = null
        }
    };

    const handleSwitchChange = (event) => {
        event.preventDefault()
        setIsAddingMultiple(event.target.checked)
    }
    return (
        <>
            <div className='parent-form'>
                <div className='form-cover'>
                    <form className={data.type} onSubmit={handleSubmit}>
                        <div className='multiple-add'>
                            <p>Thêm nhiều sản phẩm cùng lúc</p>
                            <Switch checked={isAddingMultiple} onChange={handleSwitchChange}/>
                        </div>
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
                                onChange={handleChange}
                                value={product[element.name] || element.name == 'imageUrl' ? null : ''}
                                fileInputRef={element.type === 'file_upload' ? fileInputRef : null}
                            />
                        ))}
                        <button type='submit'>{buttonData.customAttributes.button.text}</button>
                    </form>
                    <div className='form-demo'>
                        <ProductCard className='demo-card' name={product.productName} price={product.price} imageSrc={product.imageUrl}/>
                    </div>
                </div>
            </div>
        </>
    )
}