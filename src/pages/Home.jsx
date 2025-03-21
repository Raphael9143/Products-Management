import { useContext, useState } from "react"
import { ProductsContext } from "../components/context/ProductsContext"
import CreateProductForm from "../components/Menu/Menu"
import CardContainer from "../components/CardContainer"

import '../assets/styles/Home.css'
import Alert from "../components/Alert/Alert"

export default function Home() {
    const { data } = useContext(ProductsContext)
    const [applyData, setApplyData] = useState(null)
    const [alertMessage, setAlertMessage] = useState(null)
    return (
        <> 
            {data && 
                <div className="container">
                    <CreateProductForm data={data.data} setAlertMessage={setAlertMessage} setApplyData={(data) => setApplyData(data)}/>
                    <CardContainer data={data.data[3]} items={applyData ? applyData : data.data[3].customAttributes.productlist.items}/> 
                </div>
            }
            {alertMessage && <Alert message={alertMessage}/>}
        </>
    )
}