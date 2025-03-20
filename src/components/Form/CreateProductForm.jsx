import FormElement from "./FormElement/FormElement";

export default function CreateProductForm({ data }) {
    const formData = data[1].customAttributes.form
    const buttonData = data[2]
    console.log(formData)
    return (
        <div className="product-submit-form">
            <form className={data.type}>
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
    )
}