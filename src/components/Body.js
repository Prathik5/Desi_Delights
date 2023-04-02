import { restaurantList } from "../Config";
import RestrauntCart from "./RestrauntCart";
import { useState } from "react";


const filterData = (searchText, restaurant) =>{
    return restaurant.filter((restaurant) =>
    restaurant.data.name.includes(searchText))
};

const Body = () =>{
    // const search = "Dominos"
    const [restaurant, setrestaurant] = useState(restaurantList)

    const [searchText, setSearchText] = useState();

    return(
      <> 
      <div className="searchBar">
        <input 
            type="text"
            placeholder="Search"
            className="search-holder"
            value= {searchText} 
            onChange = { (e) =>{
                setSearchText(e.target.value)
            }}/>
        <button className="search-btn" onClick={() =>{
           const data = filterData(searchText, restaurant) ;
           setrestaurant(data);
        }}>Search</button>
      </div> 
        <div className="restaurant-list">
            {
                restaurant.map((restaurant) =>{
                return <RestrauntCart {...restaurant.data} key={restaurant.data.id}/>
            })
            }
        </div>
      </>
    )
  }

export default Body;