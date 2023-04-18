import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../Config";
import Shimmer from "./Shimmer";
import Vegimg from "../Assets/Images/VegImage.jpg";
import NonVegimg from "../Assets/Images/NonVegImg.png";



const Menu = ()=>{
    const { id } = useParams();

    const [restta, setRestta] = useState([]);

    useEffect(()=>{
        getRestroInfo();
    },[])

    async function getRestroInfo(){
        let data, json;
        try{
         data = await fetch
         (`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.93447270395668&lng=77.55282819271088&restaurantId=${id}&submitAction=ENTER`)
         json =data.ok ? await data.json() : await Promise.reject(data.status);
        }
        catch(e){
            console.warn("An Error Occured")
        }
        console.log(json)

        setRestta(json.data.cards);
    }

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

            <div className="Menu-item-box">
                {/* <h1 >Menu</h1> */}
                <ul >{
                        restItems?.map((items, index) =>{
                            return( 
                                    <div>
                                        <div className="Just-checking" >
                                            <li className="Item-name"  key={index}>{items.card.info.name}</li>
                                            <span key = "JustVeg">{items.card.info.isVeg === 1 ? <img className="Veg-or-not" src={Vegimg} alt="Veg"/> : <img className="Veg-or-not" src={NonVegimg} alt="Non-Veg"/>}</span>
                                            <h3 key = "Cost">&#8377;{(items.card.info.price)/100}</h3> 

                                            <p key = "AboutFood">{items.card.info.description}</p>
                                        </div>

                                        <div className="CHecking-again">
                                            <img className="Menu-Food-Picture" src={ IMG_CDN + items.card.info.imageId} alt="" />
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

