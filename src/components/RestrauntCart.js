import { IMG_CDN } from "../Config";  

const RestrauntCart = ( {
    cloudinaryImageId,
    name,
    cuisines,
    area, 
    costForTwo,
    deliveryTime
  }) => {
    return(
      <div className="RestaurantCard">
        <img className="immage"  src = 
        { IMG_CDN + cloudinaryImageId
        } alt="Picture" title={name}
        />
        <h2>{name}</h2>
        <span>{cuisines.join(", ")}</span>
        <div className="aRea">{area}</div>
        <p>Cost for 2 : {costForTwo}<span className="delTime">{deliveryTime} mins</span></p>
        
      </div>
    )
  };

  export default RestrauntCart