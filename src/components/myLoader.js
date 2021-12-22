import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function myLoader(){
    return (<div className="loader"> 
    <Loader
          type="Puff"
          color="#00BFFF"
          height={300}
      
          width={300}/>Hello</div>)
}