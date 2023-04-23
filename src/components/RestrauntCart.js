import { useContext } from "react";
import { IMG_CDN } from "../Config";  
import userContext from "../utils/userContext";

const RestrauntCart = ( {
    cloudinaryImageId,
    name,
    cuisines,
    area, 
    costForTwoString,
    avgRating,
    deliveryTime,
  }) => {

    const {user} = useContext(userContext)

    return(
      <>
        <div>      
          <div className="w-80 h-[400px] p-2 m-2 shadow bg-pink-50">
            <div>
            <img className=" w-64 h-52"  src = 
            { IMG_CDN + cloudinaryImageId}
            alt="Picture" title={name}
            />
            </div>
            <div className="">
              <h2 className="font-bold text-xl ">{name}</h2>
              <span className="text-Cuisine-grey">{cuisines.join(", ")}</span>
            </div>
            <div>
              <span className= "bg-green-400 ">&#9733; {avgRating }</span>
              <span className="px-2">&middot;</span>
              <span className="">{deliveryTime} mins</span>
              <span className="px-2">&middot;</span>
              <span className="Cost-display">{costForTwoString.toLowerCase()}</span>
              <div className="font-bold  text-red-500">{user.name} - {user.email}</div>            
            </div>
            <hr />
          </div>
        </div>
      </>    
    )
  };

  export default RestrauntCart