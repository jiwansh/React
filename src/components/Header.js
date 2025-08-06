import { logo_url } from "../utils/constant";
import { useState } from "react";
import Logo from "../assets/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Header = () => {
  //   let btnName = 'Login';

  const [btnNameReact, setBtnNameReact] = useState('Login');
  // console.log('header render');
  const isOnline= useOnline();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg lg:bg-yellow-100 sm:bg-green-300">
      <div className="logo-container">
        {
          <a href="/">
            <img src={logo_url} alt="App Logo" className="w-56" /> 
          {/* <img src={Logo} alt="App Logo" className="logo" /> */}
          </a>
       
        }
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
         <li className="px-4 "> <Link to="/">Home
          </Link></li>
          
          <li className="px-4 "><Link to="/about">
          About Us</Link></li>
          
          <li className="px-4 "><Link to="/contact">Contact Us</Link></li>
          <li className="px-4 ">Cart</li>
          <li className="px-4 "><Link to="/instamart">Instamart</Link></li>
          
          <h1 className="px-4 ">Online Status: {isOnline? "✅":"❌"}</h1>
          <button
            className="loginBtn"
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
              // console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;