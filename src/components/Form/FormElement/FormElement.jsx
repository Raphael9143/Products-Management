import UploadForm from "../UploadForm";

export default function FormElement({ label, name, inputType, required, maxLength, minValue, maxValue }) {
    return (
        <div className="form-element">
            {inputType !== 'file_upload' && 
                <>
                    <label htmlFor={name}>
                        {required && <span style={{color: 'red'}}>*</span>} {label}
                    </label>
                    <input name={name} type={inputType} required={required} maxLength={maxLength} min={minValue} max={maxValue}/>
                </>
            }
            {inputType === 'file_upload' && <UploadForm/>}
        </div>
    )
}