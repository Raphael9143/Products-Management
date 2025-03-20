import { useContext } from "react";
import FormElement from "./FormElement/FormElement";
import { ProductsContext } from "../Context/ProductsContext";

export default function CreateProductForm({ data }) {
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

    return (
        <div className="product-submit-form">
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
    );
}