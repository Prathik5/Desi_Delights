
import RestrauntCart from "./RestrauntCart";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import { Body_Page } from "../Config";
import useOnline from "../utils/useOnline";



const Body = () =>{
    const [allrestaraunt, setAllRestaraunt] = useState([]);

    const [filteredrestaurant, setFilteredrestaurant] = useState([])

    const [searchText, setSearchText] = useState();

  useEffect(() => {
    getRestaurant();
  }, [])

  async function getRestaurant() {
    const data = await fetch(Body_Page)
    const json = await data.json();
    console.log(json);
    setAllRestaraunt(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredrestaurant(json?.data?.cards[2]?.data?.data?.cards);

  }



  if(!allrestaraunt) return null ;

    return (allrestaraunt?.length === 0) ?
     <Shimmer/>
     
    : 
     
     ( 
      <> 
      <div className="searchBar p-2 my-5 bg-transparent">
        <input 
            type="text"
            placeholder="Search"
            className="bg-black text-white focus:bg-green-200 p-2 m-2"
            value= {searchText} 
            onChange = { (e) =>{
                setSearchText(e.target.value)
            }}/>
        <button className="p-2 m-2 bg-Swiggy-orange hover:bg-gray-600 text-white rounded-md " onClick={() =>{
           const data = filterData(searchText, allrestaraunt) ;
           setFilteredrestaurant(data);
        }}>Search</button>
      </div> 
        <div className="flex flex-wrap">
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