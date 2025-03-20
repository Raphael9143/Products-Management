import { createContext, useState, useEffect } from "react";
import fetchAPI from '../../api/fetchAPI'

export const ProductsContext = createContext()

export default function ProductsDataProvider({ children }) {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {   
                const response = await fetchAPI.getData()
                setData(response.data)
            } catch(error) {
                console.error({ message: `Error while fetiching data: ${error}`})
            }
        }
        fetchData()

    }, [])

    return (
        <ProductsContext.Provider value={{ data, setData }}>
            {children}
        </ProductsContext.Provider>
    )
}