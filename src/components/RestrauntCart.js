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
      <>
        <div className="Just-for-hovering">      
          <div className="w-80 h-[400px] p-2 m-2 shadow bg-pink-50">
            <div>
            <img className="immage"  src = 
            { IMG_CDN + cloudinaryImageId}
            alt="Picture" title={name}
            />
            </div>
            <div className="Restaurant-cart-name-cuisines">
              <h2 className="font-bold text-xl ">{name}</h2>
              <span className="text-Cuisine-grey">{cuisines.join(", ")}</span>
            </div>
            <div>
              <span className= "bg-green-400 ">&#9733; {avgRating }</span>
              <span className="px-2">&middot;</span>
              <span className="">{deliveryTime} mins</span>
              <span className="px-2">&middot;</span>
              <span className="Cost-display">{costForTwoString.toLowerCase()}</span>            
            </div>
            <hr />
          </div>
        </div>
      </>    
    )
  };

  export default RestrauntCart