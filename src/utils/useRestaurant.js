import { useState,useEffect } from "react";
import { getRestaurantMenuUrl } from "./constant";

const useRestaurant= (id)=>{
      const [restaurant, setRestaurant]=useState(null);
      const [menuItems, setMenuItems] = useState([]);

    // get data from api
     useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {

        const data = await fetch(getRestaurantMenuUrl(id));
        const json = await data.json();
        console.log(json.data);
        const restaurantInfo = json?.data?.cards[2]?.card?.card?.info;
        console.log(restaurantInfo);
        setRestaurant(restaurantInfo);

        // menu of restaurant
        const recommendedItems = json?.data?.cards
            ?.find((c) => c.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
                (c) => c?.card?.card?.title === "Recommended"
            )?.card?.card?.itemCards;

        setMenuItems(recommendedItems || []);
     }

     //return restaurant data
     return [restaurant,menuItems];
};
export default useRestaurant;