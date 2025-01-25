import IndexLayout from "../Layouts/IndexLayout";
import MainLayout from "../Layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import Auth from "../Components/Auth/Auth";
export const router = createBrowserRouter([

    {
        path: "/",
        element: <IndexLayout />,

    },

    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: `/auth`,
                element: <Auth />,
            },
        ],
    },


]);
