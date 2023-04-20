
const useBody = () =>{


const [allrestaraunt, setAllRestaraunt] = useState([]);

const [filteredrestaurant, setFilteredrestaurant] = useState([])

useEffect(() => {
getRestaurant();
}, [])

async function getRestaurant() {
const data = await fetch(Body_Page)
const json = await data.json();
console.log(json);
setAllRestaraunt(json?.data?.cards[2]?.data?.data?.cards);
setFilteredrestaurant(json?.data?.cards[2]?.data?.data?.cards);
}
return allrestaraunt, filteredrestaurant
}

export default useBody;