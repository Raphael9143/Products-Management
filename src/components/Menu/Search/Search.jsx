import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../assets/styles/Search.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export default function Search({onSearch, onSearchComplete}) {
    const [keyword, setKeyword] = useState('')

    const handleChange = (event) => {
        setKeyword(event.target.value)
        onSearch(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSearchComplete(keyword)
    }

    return (
        <div className='search'>
            <form>
                <input type='text' placeholder='Nhập tên sản phẩm' value={keyword} onChange={handleChange}/>
                <button onClick={handleSubmit}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </form>
        </div>
    )
}