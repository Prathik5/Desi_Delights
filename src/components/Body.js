
import RestrauntCart from "./RestrauntCart";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import { Body_Page } from "../Config";
import useOnline from "../utils/useOnline";
// import userContext from "../utils/userContext";
import searchbutton from "../Assets/Images/search_button.png";



const Body = ({user}) =>{
    const [allrestaraunt, setAllRestaraunt] = useState([]);

    const [filteredrestaurant, setFilteredrestaurant] = useState([])

    const [searchText, setSearchText] = useState();

    // const {user, setUser} = useContext(userContext);

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
            className="bg-black text-white h-6"
            value= {searchText} 
            onChange = { (e) =>{
                setSearchText(e.target.value)
            }}/>
        <button className=" bg-Swiggy-orange hover:bg-gray-600 text-white rounded-md " onClick={() =>{
          const data = filterData(searchText, allrestaraunt) ;
          setFilteredrestaurant(data);
          }}><img className="w-5 h-5" src={searchbutton}/>
        </button>
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
                    <RestrauntCart {...restaurant.data} key={restaurant.data.id} />
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