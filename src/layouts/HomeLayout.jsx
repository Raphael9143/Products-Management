import { Outlet } from 'react-router-dom'

export default function HomeLayout() {
    return (
        <div className='root-page'>
        <header>
            <p>header</p>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>footer</footer>
    </div>
    )
}