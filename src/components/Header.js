const  Title = () =>{ 
    return(
      <a href="/">
        <img className="imagee" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-app-by-town-brandcrowd.png" 
        alt="Food app hai badwe" />
      </a>
  )}
  
const Header = () =>{
    return (
      <div className="Header">
        <Title/>
        <h1>Zwigato</h1>
        <div className="navItems">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;