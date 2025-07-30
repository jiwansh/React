import {useRouteError} from "react-router-dom"
const Error= ()=>{
    const err=useRouteError();
    console.log(err);
  return (
   <div>
    <h1>Oops Moment Caught</h1>
    <h2>Can not show the page</h2>
    <h3>{err.status+" : "+ err.statusText}</h3>
   </div>
  );
};
export default Error;