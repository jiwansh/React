import { imageUrl } from "../utils/constant";
const RestaurantCard = (props) => {
  const { resData } = props;

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
      // style={{
      //   backgroundColor: '#f0f0f0',
      // }}
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
      </div>
    </div>
  );
};

export default RestaurantCard;