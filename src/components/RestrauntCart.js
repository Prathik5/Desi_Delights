import { IMG_CDN } from "../Config";  

const RestrauntCart = ( {
    cloudinaryImageId,
    name,
    cuisines,
    city, 
    costForTwo
  }) => {
    return(
      <div className="RestaurantCard">
        <img  src = 
        { IMG_CDN + cloudinaryImageId
        } alt="Picture" title={name}
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{city} mins</h4>
        <h4>Cost for 2 : {costForTwo}</h4>
      </div>
    )
  };

  export default RestrauntCart