import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ProductsContext } from '../components/Context/ProductsContext'
import Header from '../components/Header/Header'

export default function HomeLayout() {
    const { data } = useContext(ProductsContext)
    return (
        <>
            <header>
                {data && <Header text={data.data[0].customAttributes.label.text}/>}
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}