import React from "react";
// import Nabvar from './Nabvar';
// import Data from './data.json'
// import Helmet from 'react-helmet';
// import Navbar2 from "./Navbar2";
import Data from "../data/Informal (1).json";
import { useParams } from "react-router-dom";

function Desc4() {
  const { eventname } = useParams();

  return (
    <>
      {/* <Navbar2 /> */}
      <div className="description">
        {Data.filter((items) => items.eventname === eventname).map(
          (items, index) => (
            <div className="containerr-event">
              <div className="poster">
                <img src={items.img} alt="" />
              </div>
              <div>
                <div className="heading">
                  <h2>{items.eventname}</h2>
                </div>
                <div className="desc">{items.about}</div>
                <div className="date-time">
                  <div className="date-o">
                    <div className="icon-date">
                      <img src="./images/calander.svg" alt="" />
                    </div>
                    <div className="date-value">{items.date}</div>
                  </div>
                  <div className="date-o">
                    <div className="icon-date">
                      <img src="./images/clock.svg" alt="" />
                    </div>
                    <div className="date-value">{items.time}</div>
                  </div>
                </div>
                <div className="date-time m-m">
                  <div className="date-o">
                    <div className="icon-date">
                      <img src="./images/map.svg" alt="" />
                    </div>
                    <div className="date-value ">{items.venue}</div>
                  </div>
                </div>
                <div className="details">
                  <div className="key">Event Co Ordinator:</div>
                  <div className="value">{items.coordinator}</div>
                </div>
                <div className="details m-t">
                  <div className="key">Over All Head:</div>
                  <div className="value">{items.head}</div>
                </div>
                <div className="details m-t">
                  <div className="key">Fees:</div>
                  <div className="value">{items.eventFeeDIT}(DIT)</div>
                  <div className="value">{items.eventFeeNonDIT}(NON-DIT)</div>
                </div>
              </div>
            </div>
          )
        )}

        {/* </div> */}

        <div className="button-button">
          REGISTRATION STARTS SOON &nbsp;{" "}
          <img src="./images/arrow-down.svg" alt="" />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Desc4;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Data from "../data/Debate (1).json";

// function Desc() {

//   const {id} = useParams();

//   return (

//     <>
//     <div>
//       {Data.filter((items)=> items.id === id).map((items,index)=>(<div>
//         <h1>{items.id}</h1>
//       </div>))}
//     </div>
//     </>

//   );
// }

// export default Desc;
