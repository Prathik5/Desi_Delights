import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../Config";
import Shimmer from "./Shimmer";


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
    const restcost = restta[0]?.card?.card?.info?.costForTwoMessage;
    
    const restItems = restta[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;



    return(!restta) ? <Shimmer/> : (
        <div className="Menu">
            <div>
            {/* <h1>Restaurant ID {id}</h1> */}
            <h2>{restName}</h2>
                <img src={IMG_CDN + restImage} alt={restName} />
                <h2>&#9733; {restRating} </h2>
                <div>Cost : {restcost}</div>
            </div>

            <div>
                <h1>Menu</h1>
                <ul>{
                        restItems?.map((items, index) =>{
                            return <li key={index}>{items.card.info.name}</li>
                    })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menu

