export default function UploadForm({text}) {
    const MAX_SIZE = 5*1024*1024
    const handleUpload = (event) => {
        const uploaded = event.target.files[0]

        if (uploaded) {
            if (uploaded.size > MAX_SIZE) {
                alert('File size exceeds 5MB!')
            } else {
                // do smth
            }
        }
    }
    return (
        <>
            <label htmlFor="image">
                {text}
            </label>
            <input type="file" accept="image/*" />
        </>
    )
}