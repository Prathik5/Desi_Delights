import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Fetch_Menu, IMG_CDN } from "../Config";
import Shimmer from "./Shimmer";
import Vegimg from "../Assets/Images/VegImage.jpg";
import NonVegimg from "../Assets/Images/NonVegImg.png";
import useMenu from "../utils/useMenu";



const Menu = ()=>{
    const { id } = useParams();

    const [count, setCount] = useState(0);

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
            <div className="flex bg-black">
                <div className="justify-start">
                    <h2 className="font-bold p-2 m-2 text-white">{restName}</h2>
                    <img className="w-48" src={IMG_CDN + restImage} alt={restName} />
                </div>
                <div className="flex flex-wrap-reverse justify-between">
                    <div className="p-2 text-white "> &#9733; {restRating}</div>
                    <div className="p-2 text-white"> Cost : {restcost}</div>
                    <div className="p-2 text-white">{restArea}</div>
                </div>
            </div>
            <hr className="p-2 w-2 " />

            <div >
                {/* <div>{restItems.title}</div> */}
                <ul >{
                        restItems?.map((items, index) =>{
                            return( 
                                    <div className="flex items-center">
                                        <div>{items.title}</div>
                                        <div className="my-2 pl-[25%] py-2 w-[900px]" >
                                            <span key = "JustVeg">{items.card.info.isVeg === 1 ? <img className="w-4 h-4" 
                                                src={Vegimg} alt="Veg"/> : <img className="w-4 h-4" src={NonVegimg} alt="Non-Veg"/>}</span>
                                                <li className="text-Cost font-bold"  key={index}>{items.card.info.name}</li>
                                                <h3 key = "Cost" className="text-Cost">&#8377;{(items.card.info.price)/100}</h3> 
                                                <p className="text-Item-description">{items.card.info.description}</p>
                                        </div>

                                        <div className="pl-20" >
                                            <img className="w-36" src={ IMG_CDN + items.card.info.imageId} alt={items.card.info.name} />
                                            <button>
                                                <button className="text-white bg-Swiggy-orange px-1 m-1" 
                                                onClick={ () =>
                                                    setCount(count + 1)
                                                }>+ </button>
                                                <button className="text-white bg-Swiggy-orange px-2 m-2 ">{count}</button>
                                                <button className="text-white bg-Swiggy-orange px-1 m-1" 
                                                onClick={ () =>
                                                    setCount(count - 1)
                                                }>-</button>
                                            </button>
                                        </div>
                                        
                                        <hr className="font-bold text-black "/>
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

