import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Fetch_Menu, IMG_CDN } from "../Config";
import Shimmer from "./Shimmer";
import Vegimg from "../Assets/Images/VegImage.jpg";
import NonVegimg from "../Assets/Images/NonVegImg.png";
import useMenu from "../utils/useMenu";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const Menu = () => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const { id } = useParams();

  const { isAuthenticated } = useAuth0();
  // const [count, setCount] = useState(0);

  const restta = useMenu(id);

  const restDetail = restta[0]?.card?.card?.info;
  // console.log(restDetail);

  const restName = restDetail?.name;
  const restCity = restDetail?.city;
  const restRating = restDetail?.avgRatingString;
  const restTotRating = restDetail?.totalRatingsString;
  const restcost = restDetail?.costForTwoMessage;
  const restArea = restDetail?.areaName;

  const restItems =
    restta[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  let allFooditems = restta[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  let reqFoodItems = allFooditems?.slice(1);
  let MenuItems = reqFoodItems?.map((reqFood) => {
    menuArray = reqFood?.card?.card?.itemCards;
    menuObject = Object.assign({}, menuArray);
    // menuObject = { ...menuArray };
    return menuObject;
  });

  // let finalMenu = MenuItems?.map((finall) => {
  //   return finall;
  // });

  console.log(restItems);
  console.log(MenuItems);
  // console.log(finalMenu);

  // !----------------------------------HERE ENDS THE CORE JAVASCRIPT PART--------------------------------------------------------!

  return !restta ? (
    <Shimmer />
  ) : (
    <div className="Menu">
      {/* This is the Header section */}
      <div className="flex justify-evenly items-center ">
        <div className="">
          <div className="font-bold p-2 m-2 text-Resto-Name">{restName}</div>
          <div className="p-2 font-semibold text-base text-Cost ">
            {" "}
            Cost : {restcost}
          </div>
          <div className="p-2 text-sm font-semibold">
            {restArea}, {restCity}
          </div>
        </div>
        <div className=" border border-border-box w-fit">
          {restRating > 4.0 ? (
            <div className="text-GoodRatings"> &#9733; {restRating}</div>
          ) : (
            <div className="text-Bad-rating-bacround text-sm">
              &#9733; {restRating}
            </div>
          )}
          <hr className="h-1 bg-border-box" />
          <div className="p-2 text-xs text-Ratings">{restTotRating}</div>
        </div>
      </div>
      <hr className="p-2 w-2 " />
      {/* This is the menu section */}
      <div>
        {/* <div>{restItems.title}</div> */}
        <ul data-testid="menu">
          {restItems?.map((items, index) => {
            console.log(items);
            return (
              <div className="flex items-center">
                <div className="my-2 pl-[25%] py-2 w-[900px]">
                  <span key="JustVeg">
                    {items?.card?.info?.isVeg === 1 ? (
                      <img className="w-4 h-4" src={Vegimg} alt="Veg" />
                    ) : (
                      <img className="w-4 h-4" src={NonVegimg} alt="Non-Veg" />
                    )}
                  </span>
                  <li className="text-Cost font-bold" key={index}>
                    {items?.card?.info?.name}
                  </li>
                  <h3 key="Cost" className="text-Cost p-2">
                    &#8377;{items?.card?.info?.price / 100}
                  </h3>
                </div>
                <hr className="bg-black" />

                <div className="pl-20">
                  <img
                    className="w-36 h-28"
                    src={IMG_CDN + items?.card?.info?.imageId}
                    alt={items?.card?.info?.name}
                  />
                  <div className="flex p-2">
                    <button
                      data-testid="add-btn"
                      className="mx-5 px-3 hover:bg-black hover:text-Swiggy-orange"
                      onClick={() => {
                        isAuthenticated ? handleAddItem(items) : <></>;
                      }}
                    >
                      +
                    </button>
                    <button
                      className="mx-5 px-3 hover:bg-black hover:text-Swiggy-orange "
                      onClick={() => {
                        isAuthenticated ? (
                          handleRemoveItem(items)
                        ) : (
                          <alert>Please Login</alert>
                        );
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
        <hr className="font-bold text-xl text-black " />
      </div>
    </div>
  );
};

export default Menu;
