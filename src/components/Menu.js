import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Fetch_Menu, IMG_CDN } from "../Config";
import Shimmer from "./Shimmer";
import Vegimg from "../Assets/Images/VegImage.jpg";
import NonVegimg from "../Assets/Images/NonVegImg.png";
import useMenu from "../utils/useMenu";



const Menu = ()=>{
    const { id } = useParams();

    const restta = useMenu(id);

    const restName = restta[0]?.card?.card?.info?.name;
    const restImage = restta[0]?.card?.card?.info?.cloudinaryImageId;
    const restRating = restta[0]?.card?.card?.info?.avgRatingString;
    const restTotRating = restta[0]?.card?.card?.info?.totalRatingsString;
    const restcost = restta[0]?.card?.card?.info?.costForTwoMessage;
    const restArea = restta[0]?.card?.card?.info?.areaName;
    
    const restItems = restta[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;



    return(!restta) ? <Shimmer/> : (
        <div className="Menu">
            <div className="Restaurant-info">
            {/* <h1>Restaurant ID {id}</h1> */}
            <h2 className="Restaurant-menu-name">{restName}</h2>
                <img className="Restaurant-menu-image" src={IMG_CDN + restImage} alt={restName} />
                <div className="Rating-cost-area">
                    <span className="Restaurant-menu-rating">&#9733; {restRating} 
                        {/* <span>{restTotRating}</span> */}
                    </span>
                    <span>&middot;</span>
                    <span className="Restaurant-menu-cost">Cost : {restcost}</span>
                    <span>&middot;</span>
                    <span className="Restaurant-menu-area">{restArea}</span>
                </div>
            </div>
            <hr />

            <div >
                {/* <div>{restItems.title}</div> */}
                <ul >{
                        restItems?.map((items, index) =>{
                            return( 
                                    <div className="flex items-center">
                                        <div className="my-2 pl-[20%] py-2 w-[900px]" >
                                            <span key = "JustVeg">{items.card.info.isVeg === 1 ? <img className="w-4 h-4" 
                                                src={Vegimg} alt="Veg"/> : <img className="w-4 h-4" src={NonVegimg} alt="Non-Veg"/>}</span>
                                                <li className="text-Cost font-bold"  key={index}>{items.card.info.name}</li>
                                                <h3 key = "Cost" className="text-Cost">&#8377;{(items.card.info.price)/100}</h3> 
                                                <p className="text-Item-description">{items.card.info.description}</p>
                                        </div>

                                        <div className="pl-20" >
                                            <img className="w-36" src={ IMG_CDN + items.card.info.imageId} alt={items.card.info.name} />
                                        </div>
                                        
                                        <hr />
                                    </div>
                            )
                    })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menu

