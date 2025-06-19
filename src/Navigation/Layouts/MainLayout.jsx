import { Outlet } from "react-router-dom"
import NavBar from "../../components/NavBar"



const MainLayout = () => {
    const NavLinkData = [
        {
            elementName: "Home",
            path: "/",
        },
        {
            elementName: "Causes",
            path: "/causes",
        },
        {
            elementName: "Single Cause",
            path: "/causes/:id",
        },
        {
            elementName: "About Us",
            path: "/aboutUs",
        },
        {
            elementName: "Contact Us",
            path: "/contactUs",
        },
        {
            elementName: "Dashboard",
            path: "/dashboard",
        },
        {
            elementName: "Donate",
            path: "/donate",
        },
    ]
     
    const DonateButton = {
         
            elementName: "Donate",
            path: "/donate",
        
    }
  return (
    
    <div className=" min-h-screen">
      
      <div className="relative">
        <NavBar  NavLinkData={NavLinkData} />
        <Outlet />
      </div>
      
    </div>

  )
}

export default MainLayout
