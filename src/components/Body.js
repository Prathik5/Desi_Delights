import RestrauntCart from "./RestrauntCart";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import { Body_Page, carouselImage } from "../Config";
import searchbutton from "../Assets/Images/search_button.png";
const Body = ({}) => {
  const [allrestaraunt, setAllRestaraunt] = useState([]);
  const [filteredrestaurant, setFilteredrestaurant] = useState([]);
  const [searchText, setSearchText] = useState();
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(Body_Page);
    const json = await data.json();
    setAllRestaraunt(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredrestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setCarousel(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
  }

  if (!allrestaraunt) return null;

  return allrestaraunt?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {/* This is the carousel section */}
      <div className="flex overflow-scroll ease-in-out overflow-x:auto">
        {carousel.map((x) => {
          return (
            <>
              <li className="list-none">
                <Link className="w-[425px] h-64" to={"/restaurant/" + x?.id}>
                  <img
                    className="w-[425px] h-64 p-2 m-2"
                    src={carouselImage + x?.imageId}
                    alt={x?.accessibility?.altText}
                  />
                </Link>
              </li>
            </>
          );
        })}
      </div>
      {/* This is the seacr bar */}
      <form onSubmit={(e) => e.preventDefault()}>
        <div
          key="InputSearch"
          className="flex items-center justify-center p-2 my-5 bg-transparent "
        >
          <input
            data-testid="search-input"
            type="text"
            placeholder="Search for Restaurants"
            className="w-1/2 h-10"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <hr className="w-1 h-full bg-black" />
          <button
            data-testid="search-btn"
            className=" bg-Swiggy-orange hover:bg-gray-600 text-white rounded-md "
            onClick={() => {
              const info = filterData(searchText, allrestaraunt);
              setFilteredrestaurant(info);
            }}
          >
            <img className="w-5 h-5" src={searchbutton} />
          </button>
        </div>
      </form>
      {/* This is the restaurants section */}
      <div className="flex flex-wrap justify-center" data-testid="res-list">
        {filteredrestaurant.map((restaurant) => {
          if (filteredrestaurant?.length === 0) {
            return <h1>No matching restaurant found</h1>;
          } else {
            return (
              <Link to={"/restaurant/" + restaurant.info.id}>
                <RestrauntCart {...restaurant.info} key={restaurant.info.id} />
              </Link>
            );
          }
        })}
      </div>
    </>
  );
};

export default Body;
