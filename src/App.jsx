import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";

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
  return <RouterProvider router={router}/>
}