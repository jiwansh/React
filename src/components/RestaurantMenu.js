import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { imageUrl } from "../utils/constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
    const params = useParams();
    const { id } = params;
    // id eg=16394

   const [restaurant,categories] =useRestaurant(id); // returning two variables

   const [showIndex, setShowIndex]= useState(null);

    // return (!restaurant) ? <Shimmer /> : (
    //     <div className="menu">
    //         <div>
    //             <h1>Restaurant id:{id}</h1>
    //             <h2>{restaurant.name}</h2>
    //             <img className="resImage" src={imageUrl + restaurant.cloudinaryImageId} />
    //             <h2>{restaurant.areaName}</h2>
    //             <h2>{restaurant.city}</h2>
    //             <h2>{restaurant.costForTwo}</h2>
    //             <h2>{restaurant.costForTwoMessage}</h2>
    //         </div>
    //         <div>
    //             <h1> Recommended Menu</h1>
    //             <ul>
    //                 {menuItems.map((item) => (
    //                     <li key={item.card.info.id}>{item.card.info.name}</li>
    //                 ))}
    //             </ul>
    //         </div>
    //     </div>
    // );
    //---------------showing all categories----------
    
    return (!restaurant) ? <Shimmer /> : (
        <div className="menu text-center">
           <h1 className="font-bold my-6 text-2xl">{restaurant.name}</h1>
           <p className="font-bold text-lg">
            {
            restaurant.cuisines.join(", ")} - {restaurant.costForTwoMessage}
           </p>
           {/* categories accordion */}
           {  categories.map(
                        (category, index)=>(
                        //controlled componenet

                         <RestaurantCategory 
                         key={category?.card?.card?.title} 
                         data={category?.card?.card}
                        showItems={index== showIndex ? true: false}
                        setShowIndex={()=>setShowIndex(index)} />
                         )
                )
           }

        </div>
    );
};
export default RestaurantMenu;