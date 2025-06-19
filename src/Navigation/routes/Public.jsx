import AboutUs from "../../pages/AboutUs";
import Causes from "../../pages/Causes";
import ContactUs from "../../pages/ContactUs";
import Home from "../../pages/Home";
import SingleCause from "../../pages/SingleCause";

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
    element: <SingleCause />,
    path: "/causes/:id",
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
