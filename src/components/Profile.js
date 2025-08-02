import {useEffect, useState} from "react";
const Profile= (props)=>{
    const [count, setCount]= useState(0);
     const [count2,setCount2]= useState(0);
    useEffect(()=>{
        //API Call
      const timer = setInterval(()=>{
            console.log("Nmaste Jiwanshu the OP");
        },1000);
        console.log("useEfect");

        return()=>{
            clearInterval(timer);
            console.log("useEffectReturn");
        }
        
    },[]);
    console.log("render");

    

    return (
        <div>
            <h2>Profile Componenet</h2>
            <h3>Name: {props.name}</h3>
            <h3>xyz: {props.xyz}</h3>
            <h3>Count: {count}</h3>
            <button 
            onClick={()=>{
              setCount(1);
            //   setCount2(2);
            }}>Count</button>
        </div>
    );
};
export default Profile;