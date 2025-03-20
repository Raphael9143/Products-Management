import { useContext } from "react"
import { ProductsContext } from "../components/context/ProductsContext"
import CreateProductForm from "../components/Form/CreateProductForm"

export default function Home() {
    const { data } = useContext(ProductsContext)
    console.log(data)
    return (
        <div className="container">
            <CreateProductForm/>
        </div>
    )
}