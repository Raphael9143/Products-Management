import UploadForm from "../UploadForm";

export default function FormElement({ text, inputType, required }) {
    return (
        <div className="form-element">
            {inputType !== 'image' && 
                <>
                    <label htmlFor="name">
                        {required && <span style={{color: 'red'}}>*</span>} {text}
                    </label>
                    <input type={inputType} required={required}/>
                </>
            }
            {inputType === 'image' && <UploadForm text={text}/>}
        </div>
    )
}