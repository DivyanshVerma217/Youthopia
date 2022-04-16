import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Data from "../data/Debate (1).json";

function Desc() {
  
  const {eventname} = useParams();
  
  return (

    <>
    <div>
      {Data.filter((items)=> items.eventname === eventname).map((items,index)=>(<div>
        <h1>{items.eventname}</h1>
      </div>))}
    </div>
    </>
    
  );
}


export default Desc;
