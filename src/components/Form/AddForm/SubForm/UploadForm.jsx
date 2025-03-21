import './SubForm.css'

export default function UploadForm({ name, onChange }) {
    const MAX_SIZE = 5*1024*1024
    const handleUpload = (event) => {
        const uploaded = event.target.files[0]

        if (uploaded) {
            if (uploaded.size > MAX_SIZE) {
                alert('File size exceeds 5MB!')
                event.target.value = null
            } else {
                onChange(event)
            }
        }
    }
    return (
        <>
            <label htmlFor="image">
                Ảnh sản phẩm
            </label>
            <input type="file" name={name} accept="image/*" onChange={handleUpload}/>
        </>
    )
}