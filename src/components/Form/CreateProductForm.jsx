import FormElement from "./FormElement/FormElement";

export default function CreateProductForm() {
    return (
        <div className="product-submit-form">
            <form>
                <FormElement text='Tên sản phẩm' inputType='text' required={true}/>
                <FormElement text='Giá sản phẩm' inputType='text' required={true}/>
                <FormElement text='Ảnh sản phẩm' inputType='image' required={false}/>
            </form>
        </div>
    )
}