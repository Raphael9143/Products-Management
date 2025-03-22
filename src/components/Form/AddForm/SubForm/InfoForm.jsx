import UploadForm from "./UploadForm";
import '../../../../assets/styles/SubForm.css'

export default function FormElement({ label, name, inputType, required, maxLength, minValue, maxValue, onChange, value, fileInputRef }) {
    return (
        <div className="form-element">
            {inputType !== 'file_upload' && 
                <>
                    <label htmlFor={name}>
                        {required && <span style={{color: 'red'}}>*</span>} {label}
                    </label>
                    <input name={name} type={inputType} required={required} maxLength={maxLength} min={minValue} max={maxValue} onChange={onChange} value={value}/>
                </>
            }
            {inputType === 'file_upload' && <UploadForm name={name} onChange={onChange} fileInputRef={fileInputRef}/>}
        </div>
    )
}