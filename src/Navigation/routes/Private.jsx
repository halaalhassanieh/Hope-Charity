import { Children } from "react";
import Dashboard from "../../pages/Dashboard";
import SideBar from "../../components/SideBar";
import WalletRechargeRequests from "../../components/WalletRechargeRequests";
import CreateBlogForm from "../../components/CreateBlogForm";


export const Private =
    [{
        element: <Dashboard />,
        path: "/dashboard",
        children:[
{
        element: <SideBar />,
        children: [
            {
                element: <WalletRechargeRequests />,
                path: "/dashboard/walletrechargerequests",
            },
            {
                element: <CreateBlogForm />,
                path: "/dashboard/createblogform",
            },
        ]
    },
        ]
    },
    
    ]