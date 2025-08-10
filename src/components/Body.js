import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Body = () => {
  // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State Variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState('');

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // * Whenever a state variable updates or changes, react triggers a reconciliation cycle(re-renders the component)
  console.log('Body rendered');

  useEffect(() => {
    fetchData();
  }, []);

  
 
  const fetchData = async () => {
    //fetching from this page
    //https://www.swiggy.com/collections/83649?collection_id=83649&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null'
    );
    const json = await data.json();
   

    const restaurantData = json?.data?.cards?.map(c => c.card?.card?.info).filter(info => info !== undefined);
    
    setListOfRestaurants(restaurantData);
    setFilteredRestaurant(restaurantData);

  };

  const {loggedInUser, setUserName} = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    //  search box
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 px-4 py-0.5">
          <input
            type="text"
            placeholder="Search a restaurant you want..."
            className="border border-solid border-black "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
         {/* search button  */}
          <button className="px-4 py-0 m-4 bg-green-100 rounded-lg "
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter m-4 px-4 py-0.5">
          <button
         // filter buttton
          className="px-4 py-0 m-4 bg-teal-200 flex items-center rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => parseFloat(res.avgRating) > 4
            );
            setFilteredRestaurant(filteredList);
            // console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
        <div className="search m-4 px-4 py-0.5">
          <label>UserName : </label>
           <input className="border border-black p-2"
           value={loggedInUser}
           onChange={(e)=>setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {
        filteredRestaurant.map((restaurant) => (
           <Link to={"/restaurant/" + restaurant.id}  key={restaurant.id}>
             {
             /* If the restaurant is promoted then add a promoted label to it */
                restaurant.promoted ?
                 (<RestaurantCardPromoted resData={restaurant} />) :
                 ( <RestaurantCard resData={restaurant} />)
             }
               
           </Link>
            
          
        ))}
      </div>
    </div>
  );
};

export default Body;