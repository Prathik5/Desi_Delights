import { useContext } from "react";
import userContext from "../utils/userContext";
import PlayStore from "../Assets/Images/getItOnPlayStore.png";
import AppStore from "../Assets/Images/getItOnAppStore.png";

const Footer = () => {
  const { user } = useContext(userContext);

  return (
    <div className="bg-black text-white">
      <h1 className="font-bold">
        {" "}
        This site is developed by {user.name} - {user.email}
      </h1>
      <div className="flex justify-evenly">
        <div>
          <h1 className="font-bold">Company</h1>
          <ul className="list-none font-light">
            <li>Home</li>
            <li>About Us</li>
            <li>Carrers</li>
            <li>Team</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold ">Contact us</h1>
          <ul className="list-none font-light">
            <li>Help &Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold">Legal</h1>
          <ul className="list-none font-light">
            <li>Terms & conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="">
                <img
                  src={PlayStore}
                  alt="playstore_download"
                  className="w-full h-20"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src={AppStore}
                  alt="Appstore_download"
                  className="w-full h-20"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
