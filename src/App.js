import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => {
    return (
        <div className="app" >
        <Header/>
        {/* <About/>
        <Body/>
        <Contact/> */}
        {/* <Outlet/> header and footer to be always there, things in between should change that is outlet */}
        <Outlet/>
        <Footer/>
        </div >
    )
};

const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
              path:"/",
              element:<Body/>
             },
            {
              path:"/about",
              element:<About/>
             },
             {
              path:"/contact",
              element:<Contact/>
             },
             {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
             }
        ],
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);