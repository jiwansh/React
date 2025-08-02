import { Outlet } from "react-router-dom";
import ProfileFunctionalComponenet from "./Profile"
import Profile from "./ProfileClass";
import { Component } from "react";
// const About2= ()=>{
//      return(
//         <div>
//           <h1>About Us Page</h1>
//           <p>This is the Jiwanshu learning React</p>
//           {/* <Outlet/>  we cam also use children component directly*/ } 
//           <Profile name="JiwanshuClass"/>
//           <ProfileFunctionalComponenet name="Jiwanshu" xyz="abc"/>
//         </div>
       
//      );
// };

class About extends Component{
  constructor(props){
    super(props);
    // console.log("Parent-constructor");
  }
  componentDidMount(){
    //API calls
    // console.log("Parent-componentDidMount");
  }
  render(){
    // console.log("Parent-render");
    return (
      <div>
          <h1>About Us Page</h1>
          <p>This is the Jiwanshu learning React</p>
          {/* <Outlet/>  we cam also use children component directly*/ } 
          {/* <Profile name="JiwanshuClass1"/> */}
          {/* <Profile name="JiwanshuClass2"/> */}
          <ProfileFunctionalComponenet name="Jiwanshu" xyz="abc"/>
        </div>
       
    );
  };

}

export default About;

/**
 * Parent Constructor
 * Parent Render
 *     First Child - Constructor
 *     First Child- Render
 *     Second Child- Constructor
 *     Second Child - Render
 *     First Child - ComponentDidMount
 *     SecondChild- ComponentDidMount
 * Parent componentDidMount
 */