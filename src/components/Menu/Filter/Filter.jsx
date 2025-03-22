import { useState } from 'react'
import '../../../assets/styles/Filter.css'

export default function Filter({onFilter, onFilterComplete}) {
    const [priceRange, setPriceRange] = useState('all')
    const [sortOrder, setSortOrder] = useState('default')

    const handleFilter = (event) => {
        event.preventDefault()
        onFilter({sortOrder, priceRange})
        onClose()
    }
    return(
        <div className='filter'>
            <div className='price-sort'>
                <span>Sắp xếp theo giá</span>
                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                    <option value='default'>
                        Mặc định
                    </option>
                    <option value='asc'>
                        Từ thấp đến cao
                    </option>
                    <option value='desc'>
                        Từ cao đến thấp
                    </option>
                </select>
            </div>
            <div className='price-range'>
                <span>
                    Khoảng giá
                </span>
                <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                    <option value='all'>
                        Tất cả
                    </option>
                    <option value='<=100'>
                        Từ 10.000đ đến 100.000đ
                    </option>
                    <option value='<=300'>
                        Từ 100.000đ đến 300.000đ
                    </option>
                    <option value='<=500'>
                        Từ 300.000đ đến 500.000đ
                    </option>
                    <option value='<=1000'>
                        Từ 500.000đ đến 1.000.000đ
                    </option>
                    <option value='<=5000'>
                        Từ 1.000.000đ đến 5.000.000đ
                    </option>
                    <option value='>5000'>
                        Từ 5.000.000đ trở lên
                    </option>
                </select>
            </div>
            <div className='filter-button'>
                <button onClick={handleFilter}>Áp dụng</button>
                <button onClick={onFilterComplete}>Huỷ bỏ</button>
            </div>
        </div>
    )
}