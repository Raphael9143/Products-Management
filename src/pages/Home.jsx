import { useContext } from "react"
import { ProductsContext } from "../components/context/ProductsContext"
import CreateProductForm from "../components/Form/CreateProductForm"
import CardContainer from "../components/CardContainer"

export default function Home() {
    const { data } = useContext(ProductsContext)
    return (
        <>
            {data && 
                <div className="container">
                    <CreateProductForm data={data.data}/>
                    <CardContainer data={data.data[3]}/>
                </div>
            }
        </>
    )
}