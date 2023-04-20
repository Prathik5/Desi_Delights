export const filterData = (searchText, restaurant) =>{
    return restaurant.filter((restaurant) =>
    restaurant.data.name.toLowerCase()?.includes(searchText?.toLowerCase()))
};