import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { imageUrl } from "../utils/constant";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
    const params = useParams();
    const { id } = params;
    // id eg=16394

    const [restaurant, setRestaurant] = useState({});
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        getRestaurantInfo();
    }, []);



    async function getRestaurantInfo() {
        const data = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=${id}&catalog_qa=undefined&query=Biryani&submitAction=ENTER`
        );

        const json = await data.json();
        console.log(json.data);
        const restaurantInfo = json?.data?.cards[2]?.card?.card?.info;
        console.log(restaurantInfo);
        setRestaurant(restaurantInfo);

        //trying for menu
        const recommendedItems = json?.data?.cards
            ?.find((c) => c.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
                (c) => c?.card?.card?.title === "Recommended"
            )?.card?.card?.itemCards;

        setMenuItems(recommendedItems || []);
    }


    return (!restaurant) ? <Shimmer /> : (
        <div className="menu">
            <div>
                <h1>Restaurant id:{id}</h1>
                <h2>{restaurant.name}</h2>
                <img className="resImage" src={imageUrl + restaurant.cloudinaryImageId} />
                <h2>{restaurant.areaName}</h2>
                <h2>{restaurant.city}</h2>
                <h2>{restaurant.costForTwo}</h2>
                <h2>{restaurant.costForTwoMessage}</h2>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.card.info.id}>{item.card.info.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default RestaurantMenu;