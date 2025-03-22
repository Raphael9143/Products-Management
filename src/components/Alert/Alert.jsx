import '../../assets/styles/Alert.css'

export default function Alert({message}) {
    return (
        <div className='alert-message'>
            <p>{message}</p>
        </div>
    )
}