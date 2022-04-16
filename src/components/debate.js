import React from "react";
import Navbar2 from "./Navbar2";
import Img1 from "../img/Group 2.png";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Data from "../data/Debate (1).json";

function Debate() {
  let naviagte = useNavigate();
  return (
    <>
      {/* <Navbar2 /> */}
      <div className="flex flex-grow max-w-6xl">
        <div className=" grid grid-cols-6 gap-7 mx-auto bg-zinc-400">
          {/* <button className="butt">Debate</button> */}
          <button className="active1">Technical</button>
          <button className="butt">Cultural</button>
          <button className="butt">Debate</button>
          <button className="butt">Informal</button>
        </div>
      </div>
      {Data.map((items, index) => {
        return (
          <>
            <div className="flex flex-row justify-evenly max-w-6xl mx-auto py-8   border-b-2 border-grey ">
              <img className="" src={items.img} alt=" " />
              <div className=" matr flex flex-grow sm:flex-col  flex-col justify-evenly">
                <div className="flex flex-grow sm:flex-col  flex-row justify-evenly">
                  <h5>{items.eventname}</h5>
                  <div>
                    <h5>Time</h5>
                    <h6>{items.time}</h6>
                  </div>
                  <div>
                    <h5>Date</h5>
                    <h6>{items.date}</h6>
                  </div>
                  <div className="hidden lg:block">
                    <h5>Venue</h5>
                    <h6>{items.venue}</h6>
                  </div>
                  <div className="hidden lg:block">
                    <h5>Fee</h5>
                    <h6>{items.eventFeeDIT}(DIT)</h6>
                    <h6>{items.eventFeeNonDIT}(OTHERS)</h6>
                  </div>
                </div>
                <div className="flex sm:flex-col mx-14 px-8  sm:w-48 lg:w-96  flex-row justify-between">
                  <div>
                    <Link to={`/event/${items.eventname}`}>
                      <Button
                       
                        variant="secondary"
                        className="bg-gray-400 h-auto w-max px-3 py-2 rounded-full"
                      >
                        Know More
                      </Button>
                    </Link>
                  </div>
                  <div className="hidden lg:block">
                    <Button
                      variant="secondary"
                      className="bg-gray-400 hidden lg:block h-auto w-auto px-3 py-2 rounded-full"
                    >
                      Download the App
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Debate;
