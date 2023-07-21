import { IMG_CDN } from "../Config";

const RestrauntCart = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  costForTwoString,
  avgRating,
  deliveryTime,
  promoted,
}) => {
  return (
    <>
      <div>
        <div className="w-80 h-96 p-2 m-2 hover:scale-95">
          {/* {promoted ? (
            <div className="bg-Promoted-color text-white w-[25%] h-5  font-light text-sm">
              PROMOTED
            </div>
          ) : (
            <div></div>
          )} */}
          <div className="p-2 m-2">
            <img
              className=" w-64 h-52 "
              src={IMG_CDN + cloudinaryImageId}
              alt="Picture"
              title={name}
            />
          </div>
          <div className="p-2">
            <h2 className="font-[500] font-siz text-lg line-clamp-1 text-Resto-Name font-sans ">
              {name}
            </h2>
            <span className="text-Cuisine-grey text-[0.79rem] font-serif line-clamp-2 overflow-hidden">
              {cuisines.join(", ")}
            </span>
          </div>
          <div className="p-4">
            {avgRating >= 4 ? (
              <span className="bg-Rating-background text-white px-1 mx-1 text-xs">
                &#9733; {avgRating}
              </span>
            ) : (
              <span className="bg-Bad-rating-bacround text-white px-1 mx-1 text-xs">
                &#9733; {avgRating}
              </span>
            )}
            <span className="px-2 font-extrabold text-Cuisine-grey">
              &middot;
            </span>
            <span className="text-Cuisine-grey font-semibold text-xs">
              {deliveryTime} MINS
            </span>
            <span className="px-2 font-extrabold text-Cuisine-grey">
              &middot;
            </span>
            <span className="text-Cuisine-grey font-semibold text-xs">
              {costForTwoString.toUpperCase()}
            </span>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default RestrauntCart;
