import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { imageUrl } from "../utils/constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () => {
    const params = useParams();
    const { id } = params;
    // id eg=16394

   const [restaurant,menuItems] =useRestaurant(id);

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