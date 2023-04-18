const Shimmer = () =>{
    return(
        <div className="restaurant-list">
            {Array(15)
            .fill("")
            .map((e, index) =>
            <div key={index} className="shimmer-list">
                <img  className="shimmer-img"/>
                <h2 className="restName"></h2>
                <h3 className="restCuisine"></h3>
                <h4 className="cost"><span className="deliTiming"></span></h4>
            </div>
            )}

        </div>

        )
}

export default Shimmer