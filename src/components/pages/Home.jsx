import React from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="w-full mx-auto min-h-screen">
      <div className="flex h-screen items-center">
        <div className="w-full flex flex-col lg:w-3/4 px-4 py-8">
          <h1 className="text-4xl font-bold">FIND MOVIES</h1>
          <span className="text-4xl lg:text-5xl font-bold pt-[8px] bg-gradient-to-r from-[#2203FF] to-[#C40D60] text-transparent bg-clip-text">
            TV SHOWS AND MORE
          </span>
          <span className=" w-full lg:w-3/4 pt-[8px]">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </span>
          <button className="w-[55%] lg:w-[25%] border border-[white] py-1 px-4 rounded-md relative overflow-hidden flex items-center mt-[15px]">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center mr-2">
              <FontAwesomeIcon icon={faPlay} size="lg" className="text-black" />
            </div>
            <span>Watch Tutorial</span>
          </button>
        </div>
        <div className="flex items-center w-1/2 relative h-80  rounded-lg sm:h-80 lg:order-last lg:h-full pt-46">
          <img
            src="./img/image 26.png"
            alt="image1"
            className="absolute ml-80"
          />
          <img
            src="./img/Rectangle 11.png"
            alt="image2"
            className="cursor-pointer relative mt-24 ml-40 hover:shadow-outline"
          />
        </div>
      </div>

      <div className="w-full mt-[2rem]">
        <div className="flex justify-between mb-[3rem]">
          <div className="flex gap-2">
            <img src="./img/Fire.png" alt="fire" className="" />
            <span className="text-3xl">Trending</span>
          </div>
          <hr />
          <span className="text-3xl">See More</span>
        </div>
        <div className="flex gap-4">
          <div>
            <img src="./img/image 21.png" alt="image21" />
            <span>Medellin</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 22.png" alt="image21" />
            <span>Dungeons&Drag..</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 27.png" alt="image21" />
            <span>Shazam</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 26.png" alt="image21" />
            <span>Guardians of the...</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 29.png" alt="image21" />
            <span>Rich In Love2</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 30.png" alt="image21" />
            <span>Tyler Perry's Sist..</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-[2rem]">
          <div>
            <img src="./img/image 31.png" alt="image21" />
            <span>The Cube</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 32.png" alt="image21" />
            <span>Nancy Drew</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 33.png" alt="image21" />
            <span>The Crossfire</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 34.png" alt="image21" />
            <span>The Prank Panel</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 35.png" alt="image21" />
            <span>The Hypnotic</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 36.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-[4rem]">
          <span className="text-4xl">You May Like This</span>
          <hr />
          <span className="text-3xl">See More</span>
        </div>

        <div className="flex gap-4 mt-[2rem]">
          <div>
            <img src="./img/image 40.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 39.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 38.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 37.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/Rectangle 10.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/Rectangle 11.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-[2rem]">
          <div>
            <img src="./img/Rectangle 12.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 27.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 21.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/Rectangle 13.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/Rectangle 14.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/Rectangle 15.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
