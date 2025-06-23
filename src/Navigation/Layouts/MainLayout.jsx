import { Outlet } from "react-router-dom"
import NavBar from "../../components/NavBar"
import logo from "/assets/hope_logo.png"
import { FaBars } from "react-icons/fa";


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
            elementName:"Dashboard",
            path: "/dashboard",
        }
    ]
     
    const LoginButton = {
         
            elementName: "Login",
            path: "/login",
        
    }
  return (
    
    <div className=" min-h-screen">
      
      <div className="relative">
        <NavBar icon={<FaBars />} logo={logo} LoginButton={LoginButton}  NavLinkData={NavLinkData} />
        <Outlet />
      </div>
      
    </div>

  )
}

export default MainLayout


