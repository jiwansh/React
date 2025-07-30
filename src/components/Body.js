import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import resList from "../utils/mockdata";
import { Link } from "react-router-dom";
const Body = () => {
  // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State Variable - Super Powerful variable
  const [allRestaurants, setAllRestaurants] = useState([]); // Always holds the full list
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState('');

  // * Whenever a state variable updates or changes, react triggers a reconciliation cycle(re-renders the component)
  console.log('Body rendered');

  useEffect(() => {
    // fetchData();
    // Swiggy API fetch is commented out due to CORS issues and frequent API structure changes.
    // Instead, we use local mock data for development and learning purposes.
    // To use real API, set up a backend proxy or use a server with CORS enabled.
    setAllRestaurants(resList); // Set the full list
    setListOfRestaurants(resList); // Set the working list (can be used for other filters)
    setFilteredRestaurant(resList); // Set the display list
  }, []);

  /*
  // Old fetchData function using Swiggy API (commented out):
  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.83730&lng=80.91650&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null'
    );
    const json = await data.json();
    // The API structure changes often. You must inspect json and update the path accordingly.
    // Example for one version:
    // setListOfRestaurants(json.data.cards[2].data.data.cards);
    // Example for another version:
    // const restaurantList = json.data.cards
    //   .map(c => c.card?.card?.info)
    //   .filter(info => info !== undefined);
    // setListOfRestaurants(restaurantList);
    // setFilteredRestaurant(restaurantList);
  };
  */

  // * Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div> */}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search a restaurant you want..."
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // * Filter the restaurant cards and update the UI
              // Use allRestaurants for searching, and use res.data.name for mock data structure
              const filteredRestaurant = allRestaurants.filter((res) =>
                (res.data.name || '').toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // * Filter logic
            // Use allRestaurants for filtering, and use res.data.avgRating for mock data structure
            const filteredList = allRestaurants.filter(
              (res) => parseFloat(res.data.avgRating) > 4
            );
            setFilteredRestaurant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {
        filteredRestaurant.map((restaurant) => (
          // return (
          //   <Link
          //   to={"/restaurant/"+restaurant.data.id}
          //   key={restaurant.data.id}>
          //     <RestaurantCard key={restaurant.data.id} resData={restaurant.data} />
          //   </Link>
          // );
          // Fix: Use restaurant.data.id as key, and pass restaurant.data as resData
          <RestaurantCard key={restaurant.data.id} resData={restaurant.data} />
          
        ))}
      </div>
    </div>
  );
};

export default Body;