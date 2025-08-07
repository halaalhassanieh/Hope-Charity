import AboutUs from "../../pages/AboutUs";
import Causes from "../../pages/Causes";
import ContactUs from "../../pages/ContactUs";
import Home from "../../pages/Home";
import News from "../../pages/News";

export const Public = [
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <Causes />,
    path: "/causes",
  },
  {
    element: <News />,
    path: "/news",
  },

  {
    element: <AboutUs />,
    path: "/aboutUs",
  },
  {
    element: <ContactUs />,
    path: "/contactUs",
  },

];
