import RestrauntCart from "./RestrauntCart";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import { Body_Page, carouselImage } from "../Config";
import useOnline from "../utils/useOnline";
// import userContext from "../utils/userContext";
import searchbutton from "../Assets/Images/search_button.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Body = ({ user }) => {
  const [allrestaraunt, setAllRestaraunt] = useState([]);

  const [filteredrestaurant, setFilteredrestaurant] = useState([]);

  const [searchText, setSearchText] = useState();

  // const [offerscreen, setofferscreen] = useState();

  const [carousel, setCarousel] = useState([]);

  const LeftSlider = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const RighttSlider = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(Body_Page);
    const json = await data.json();
    console.log(json);
    setAllRestaraunt(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredrestaurant(json?.data?.cards[2]?.data?.data?.cards);
    // setofferscreen(json?.data?.cards[0]);
    // console.log(allrestaraunt);
    setCarousel(json?.data?.cards[0]?.data?.data?.cards);
    console.log(carousel);
  }

  if (!allrestaraunt) return null;

  return allrestaraunt?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex items-center p-2 m-2 h-80">
        {/* <MdChevronLeft
          onClick={LeftSlider}
          size={40}
          className="text-white cursor-pointer hover:opacity-100"
        /> */}
        {/* {carousel.map((cdata) => {
          <Link to={"/restaurant/" + cdata.data.link}>
            <img
              src={carouselImage + cdata.data.creativeId}
              key={cdata.data.bannerId}
            />
          </Link>;
        })} */}
        <Link
          className="w-full h-full px-2 ease-in-out"
          to={"/restaurant/" + carousel[0]?.data?.link}
        >
          <li className="list-none">
            <img
              className="rounded-lg"
              src={carouselImage + carousel[0]?.data?.creativeId}
            />
          </li>
        </Link>

        <Link
          className="w-full h-full px-2 ease-in-out "
          to={"/restaurant/" + carousel[4].data.link}
        >
          <li className="list-none">
            <img
              src={carouselImage + carousel[4].data.creativeId}
              className="rounded-lg"
            />
          </li>
        </Link>
        <Link
          className="w-full h-full px-2 ease-in-out"
          to={"/restaurant/" + carousel[1]?.data?.link}
        >
          <li className="w-full h-full px-2 ease-in-out list-none">
            <img
              src={carouselImage + carousel[1]?.data?.creativeId}
              className="rounded-lg"
            />
          </li>
        </Link>

        <Link
          className="w-full h-full px-2 ease-in-out"
          to={"/restaurant/" + carousel[2]?.data?.link}
        >
          <li className="w-full h-full px-2 ease-in-out list-none">
            <img
              src={carouselImage + carousel[2]?.data?.creativeId}
              className="rounded-lg"
            />
          </li>
        </Link>

        <Link
          className="w-full h-full px-2 ease-in-out"
          to={"/restaurant/" + carousel[3]?.data?.link}
        >
          <li className="w-full h-full px-2 ease-in-out list-none">
            <img
              src={carouselImage + carousel[3]?.data?.creativeId}
              className="rounded-lg"
            />
          </li>
        </Link>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div
          key="InputSearch"
          className="searchBar flex items-center justify-center p-2 my-5 bg-transparent "
        >
          <input
            data-testid="search-input"
            type="text"
            placeholder="Search"
            className=""
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
              const data = filterData(searchText, allrestaraunt);
              setFilteredrestaurant(data);
            }}
          >
            <img className="w-5 h-5" src={searchbutton} />
          </button>
        </div>
      </form>
      <div
        key="Checking-again"
        className="flex flex-wrap justify-center"
        data-testid="res-list"
      >
        {filteredrestaurant.map((restaurant) => {
          if (filteredrestaurant?.length === 0) {
            return <h1>No matching restaurant found</h1>;
          } else {
            return (
              <Link to={"/restaurant/" + restaurant.data.id}>
                <RestrauntCart {...restaurant.data} key={restaurant.data.id} />
              </Link>
            );
          }
        })}
      </div>
    </>
  );
};

export default Body;
