import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus, faFilter, faL, faMagnifyingGlass, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

import './Menu.css'
import ParentForm from "../Form/AddForm/ParentForm";
import Search from "./Search/Search";
import Filter from "./Filter/Filter";

export default function CreateProductForm({ data, setAlertMessage, setApplyData }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isAdding, setIsAdding] = useState(false)
    const [isSearching, setIsSearching] = useState(false)
    const [isFiltering, setIsFiltering] = useState(false)

    const handleClick = () => {
        if (isOpen) {
            if (isAdding) {
                setIsAdding(false)
            }
            
            if (isSearching) {
                setIsSearching(false)
            }

            if (isFiltering) {
                setIsFiltering(false)
            }
        }
        setIsOpen(!isOpen)
    }

    const handleClickAction = (key) => {
        switch(key) {
            case 1:
                setIsAdding(!isAdding)
                setIsFiltering(false)
                setIsSearching(false)
                break
            case 2:
                setIsSearching(!isSearching)
                setIsFiltering(false)
                setIsAdding(false)
                break
            default:
                setIsFiltering(!isFiltering)
                setIsAdding(false)
                setIsSearching(false)
        }
    }

    useState(() => {}, [])

    const handleSearch = (keyword) => {
        const filter = data[3].customAttributes.productlist.items.filter(product => 
            product.name.toLowerCase().startsWith(keyword.toLowerCase())
        )
        setApplyData(filter)
    }

    const handleFilter = (filter) => {
        const filtered = applyFilter(filter)
        setApplyData(filtered)

    }

    const applyFilter = (filter) => {
        let filtered = data[3].customAttributes.productlist.items
        filtered = filtered.filter(item => {
            const price = item.price
            switch (filter.priceRange) {
                case '<=100':
                    return price >= 10000 && price <= 100000
                case '<=300':
                    return price >= 100000 && price <= 300000
                case '<=500':
                    return price >= 300000 && price <= 500000
                case '<=1000':
                    return price >= 500000 && price <= 1000000
                case '<=5000':
                    return price >= 1000000 && price <= 5000000
                case '>5000':
                    return price >= 5000000
                default: 
                    return price >= 10000
            }
        })

        switch (filter.sortOrder) {
            case 'asc':
                filtered = filtered.sort((a, b) => a.price - b.price)
                break
            case 'desc':
                filtered = filtered.sort((a, b) => b.price - a.price)
                break
        }

        return filtered
    }

    return (
        <div className="menu">
            <div className={`menu-button-cover ${isOpen ? 'open' : ''}`}>
                <div className={`menu-button ${isOpen ? 'open' : ''}`}>
                    <FontAwesomeIcon icon={!isOpen ? faCirclePlus : faCircleMinus} className={`option-button ${isOpen ? 'plus': 'minus'}`} onClick={handleClick}/>
                    {isOpen && 
                        <div className='sub-button'>
                            <FontAwesomeIcon icon={!isAdding ? faPlus : faXmark} onClick={ () => handleClickAction(1) } className={`animation ${!isAdding ? 'show' : 'off'}`}/>
                            <FontAwesomeIcon icon={!isSearching ? faMagnifyingGlass : faXmark} onClick={() => handleClickAction(2)} className={`animation ${!isSearching ? 'show' : 'off'}`}/>
                            <FontAwesomeIcon icon={!isFiltering ? faFilter : faXmark} onClick={ () => handleClickAction(3) } className={`animation ${!isFiltering ? 'show' : 'off'}`}/>
                        </div>
                    }
                </div>
                {isAdding && <ParentForm data={data} setAlertMessage={setAlertMessage} action={handleClick}/>}
                {isSearching && <Search data={data} onSearch={handleSearch} onSearchComplete={handleClick}/>}
                {isFiltering && <Filter onFilter={handleFilter} onFilterComplete={handleClick}/>}
            </div>              
            
        </div>
    );
}