import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import ProductsDataProvider from "./components/Context/ProductsContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
    </>
  )
)

export default function App() {
  return (
    <ProductsDataProvider>
      <RouterProvider router={router}/>
    </ProductsDataProvider>
  )
}