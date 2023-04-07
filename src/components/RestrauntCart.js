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
        <h3>{cuisines.join(", ")}</h3>
        <h4 className="aRea">{area}</h4>
        <h4>Cost for 2 : {costForTwo}<span className="delTime">{deliveryTime} mins</span></h4>
        
      </div>
    )
  };

  export default RestrauntCart