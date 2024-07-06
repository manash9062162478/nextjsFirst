import React from "react";
import Accordion from "../Accordion";
import BasicSearch from "./BasicSearch";

const SearchArea = () => {
  

  return (
    <div className="my-11">
      <h1 className="text-center text-2xl text-zinc-800 font-bold">
        Search over 150 million channels
      </h1>
      <p className="text-zinc-700 text-center  text-sm ">
        Use basic filters & see limited results for free or get a premium
        account to unlock all features.
      </p>
      <div className="mx-auto lg:px-28 sm:px-11 md:px-11 mt-8">
        <Accordion title="Basic Search" rightSide="Use basic filters for free" >{<BasicSearch/> }</Accordion>
        <Accordion
          title="Content Search"
          rightSide="Use basic filters for free"
        ></Accordion>
        <Accordion
          title="Advanced filters - Growth, Engagement & Frequency
"
rightSide="Use basic filters for free"
        ></Accordion>
        <Accordion
          title="Social Media Filters
"
rightSide="Use basic filters for free"
        ></Accordion>
      </div>
      <div className="flex justify-center">
        <button className="bg-red-700 px-7 py-3 text-white rounded font-semibold flex searchButton">See Results <span className="m-0 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
						<path d="M15 7.83398L20 12.834L15 17.834" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
						<path d="M5 12.834L20 12.834" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
					</svg>
            
            
            
            </span></button>
      </div>
    </div>
  );
};

export default SearchArea;
