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
    <div className="header">
      <div className="logo-container">
        {
          <a href="/">
            <img src={logo_url} alt="App Logo" className="logo" /> 
          {/* <img src={Logo} alt="App Logo" className="logo" /> */}
          </a>
       
        }
      </div>
      <div className="nav-items">
        <ul>
         <li> <Link to="/">Home
          </Link></li>
          
          <li><Link to="/about">
          About Us</Link></li>
          
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li><Link to="/instamart">Instamart</Link></li>
          
          <h1>{isOnline? "✅":"❌"}</h1>
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