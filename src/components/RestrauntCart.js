import { IMG_CDN } from "../Config";  

const RestrauntCart = ( {
    cloudinaryImageId,
    name,
    cuisines,
    area, 
    costForTwoString,
    avgRating,
    deliveryTime
  }) => {
    return(
      <div className="Just-for-hovering">      
        <div className="RestaurantCard">
          <div>
          <img className="immage"  src = 
          { IMG_CDN + cloudinaryImageId}
           alt="Picture" title={name}
          />
          </div>
          <div className="Restaurant-cart-name-cuisines">
            <h2 className="Restaurant-cart-name">{name}</h2>
            <span className="Cuisines-list">{cuisines.join(", ")}</span>
          </div>
          <div>
            <span className="Body-rating">&#9733; {avgRating }</span>
            <span className="Middle-dot-left">&middot;</span>
            <span className="delTime">{deliveryTime} mins</span>
            <span className="Middle-dot-right">&middot;</span>
            <span className="Cost-display">{costForTwoString.toLowerCase()}</span>            
          </div>
          <hr />
        </div>
      </div>

    )
  };

  export default RestrauntCart