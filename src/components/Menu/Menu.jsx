import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus, faFilter, faL, faMagnifyingGlass, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

import './Menu.css'
import ParentForm from "../Form/AddForm/ParentForm";
import Search from "./Search/Search";
import Filter from "./Filter/Filter";

export default function CreateProductForm({ data, setAlertMessage, setSearchData }) {
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
        setSearchData(filter)
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
                {isFiltering && <Filter/>}
            </div>              
            
        </div>
    );
}