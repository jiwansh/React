import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

//chunking
// code splitting
// dynamic bundling
// Lazy Loading
// On demand Loading
//Dynamic import

const Instamart= lazy(()=>import("./components/Instamart"));
const About = lazy(()=> import("./components/About"));

// upon on Demand Loading -> upon render -> suspend Loading  


const AppLayout = () => {

const [userName, setUserName]= useState();

// authentication
useEffect(()=>{
  const data= {
    name: "Jiwanshu",
  };
  setUserName(data.name);
},[]);
    return (
      //default user context value
      <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app" >
          {/* <UserContext.Provider value={{loggedInUser:"Aman"}}> */}
        <Header/>
        {/* </UserContext.Provider> */}
        
        {/* <About/>
        <Body/>
        <Contact/> */}
        {/* <Outlet/> header and footer to be always there, things in between should change that is outlet */}
        <Outlet/>
        <Footer/>
        </div >
        </UserContext.Provider>
    );
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
              path:"/about", // '/' is for root or home page
              element:(<Suspense fallback={<h1>Loading............</h1>}>
                <About/>
              </Suspense>),
              children:[
                {
                  path:"profile", // relative path parentPath{path}=> localhost:1234/about/profile
                  element:<Profile/>
                }
              ]
             },
             {
              path:"/contact",
              element:<Contact/>
             },
             {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
             },
             {
                path:"/instamart",
                element:(<Suspense fallback={<Shimmer/>}>
                   <Instamart/>
                </Suspense>),
             }
        ],
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);