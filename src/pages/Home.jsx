import { useContext, useState } from "react"
import { ProductsContext } from "../components/Context/ProductsContext"
import CreateProductForm from "../components/Menu/Menu"
import CardContainer from "../components/CardContainer"

import './Home.css'

export default function Home() {
    const { data } = useContext(ProductsContext)
    const [searchData, setSearchData] = useState(null)
    return (
        <> 
            {data && 
                <div className="container">
                    <CreateProductForm data={data.data} setSearchData={(data) => setSearchData(data)}/>
                    <CardContainer data={data.data[3]} items={searchData ? searchData : data.data[3].customAttributes.productlist.items}/>
                </div>
            }
        </>
    )
}