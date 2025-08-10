import { useState, useEffect } from "react";
import { getRestaurantMenuUrl } from "./constant";

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState(null);
    const [categories, setCategories] = useState([]);

    // get data from api
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {

        const data = await fetch(getRestaurantMenuUrl(id));
        const json = await data.json();
        const restaurantInfo = json?.data?.cards[2]?.card?.card?.info;
        setRestaurant(restaurantInfo);

        // Recommended menu of restaurant
        // const recommendedItems = json?.data?.cards
        //     ?.find((c) => c.groupedCard)
        //     ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
        //         (c) => c?.card?.card?.title === "Recommended"
        //     )?.card?.card?.itemCards;
        // setMenuItems(recommendedItems || []);

        // filtering al category menu
        const allCategories = json?.data?.cards
            ?.find((c) => c.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c => {
                const cardType = c?.card?.card?.["@type"];
                return (
                    cardType === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
                    cardType === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
                );
            });
         setCategories(allCategories || []);
    }

    //return restaurant data
    return [restaurant, categories];
};
export default useRestaurant;