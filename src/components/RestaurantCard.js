import { useContext } from "react";
import { imageUrl } from "../utils/constant";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {loggedInUser}= useContext(UserContext)

  // Fix: Destructure directly from resData, not resData.data
  const {
    cloudinaryImageId = '',
    name = '',
    cuisines = [],
    avgRating = '',
    costForTwo = 0,
    deliveryTime = 0,
  } = resData || {};

  return (
    <div
      className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 "
    >
      <img
        className="res-logo rounded-lg h-[300px]"
        src={imageUrl + cloudinaryImageId}
        alt="Biryani"
      />

      <div className="res-card-content">
        <h3 className=" font-bold py-4 text-lg ">{name}</h3>
        <hr />
        {/* Fallback for cuisines if undefined */}
        <em>{Array.isArray(cuisines) ? cuisines.join(', ') : ''}</em>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>User: {loggedInUser}</h4>
      </div>
    </div>
  );
};

// Higher Order Component 

// input- RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard)=>{
   return (props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-md ">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
   };
};

export default RestaurantCard;