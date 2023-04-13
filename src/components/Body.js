import { restaurantList } from "../Config";
import RestrauntCart from "./RestrauntCart";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



const filterData = (searchText, restaurant) =>{
    return restaurant.filter((restaurant) =>
    restaurant.data.name.toLowerCase()?.includes(searchText?.toLowerCase()))
};

const Body = () =>{
    const [allrestaraunt, setAllRestaraunt] = useState([]);

    const [filteredrestaurant, setFilteredrestaurant] = useState([])

    const [searchText, setSearchText] = useState();

  useEffect(() => {
    getRestaurant();
  }, [])

  async function getRestaurant() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9642076&lng=77.62067689999999&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json);
    setAllRestaraunt(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredrestaurant(json?.data?.cards[2]?.data?.data?.cards);

  }

  if(!allrestaraunt) return null ;
  
  // if(filteredrestaurant?.length === 0) 
  //   return <h1>No matching restaurant found</h1>

    return (allrestaraunt?.length === 0) ?
     <Shimmer/>
     
    : 
     
     ( 
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
           const data = filterData(searchText, allrestaraunt) ;
           setFilteredrestaurant(data);
        }}>Search</button>
      </div> 
        <div className="restaurant-list">
            {
                filteredrestaurant.map((restaurant) =>{
                  if(filteredrestaurant?.length === 0) { 
                    return <h1>No matching restaurant found</h1>
                }
                else{  
                  return(
                    <Link to={"/restaurant/" + restaurant.data.id}>
                    <RestrauntCart {...restaurant.data} key={restaurant.data.id}/>
                    </Link>
                  )
              }
            })
            }
        </div>
      </>
    )
  }

export default Body;