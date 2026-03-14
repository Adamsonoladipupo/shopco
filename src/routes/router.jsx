import {createBrowserRouter} from "react-router"
import NavBar from "../component/navbar/NavBar"
import LandingPage from "../component/pages/LandingPage"
import Footer from "../component/footer/Footer"
import Products from "../component/product/products"
import HeroSection from "../component/heroSection/HeroSection"
import ClothesBrands from "../component/ClothesBrands/ClothesBrands"
import HappyCustomers from "../component/happyCustomers/HappyCustomers"
import NewArrivals from "../component/newArrivals/NewArrivals"
import TopSelling from "../component/topSelling/TopSelling"
import BrowseByStyle from "../component/browseByStyle/BrowseByStyle"

const router = createBrowserRouter([
    {
        path: "/navbar",
        element: <NavBar/>
    },
    {
        path: "/",
        element:<LandingPage/>
    },
    {
        path: "/shopco",
        element: <LandingPage/>
    },
    {
        path:"landingpage",
        element: <LandingPage/>
    },
    {
        path:"/footer",
        element:<Footer/>
    },
    {
        path: "/products",
        element: <Products/>
    },
    {
        path:"/herosection",
        element: <HeroSection/>
    },
    {
        path:"/brands",
        element: <ClothesBrands/>
    },
    {
        path: "/happycustomers",
        element: <HappyCustomers/>
    },
    {
        path: "/newarrivals",
        element: <NewArrivals/>
    },
    {
        path: "/topselling",
        element: <TopSelling/>
    },
    {
        path: "/browsebystyle",
        element: <BrowseByStyle/>
    }
])

export default router