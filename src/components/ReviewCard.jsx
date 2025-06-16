import { useState } from "react";
import likeIcon from "../assets/images/heartIcon.svg";

export function ReviewCard({ personImage, personName, children }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeClick() {
    setLikeCount((prevCount) => prevCount + 1);
    setIsLiked(true);
  }

  return (
    <>
      <div className="w-full font-one text-xl/6 felx flex-col p-6 bg-Very-Dark-Magenta rounded-xl">
        <div className="flex flex-row gap-x-6 items-center mb-4">
          <img src={personImage} className="size-12 rounded-full" alt="" />
          <div className="flex flex-col font-medium ">
            <p className=" text-white">{personName}</p>
            <p className="text-Soft-Pink">Verified Buyer</p>
          </div>
          <p className="font-medium text-Soft-Pink text-2xl ml-auto">
            {likeCount}
          </p>
          <button
            onClick={handleLikeClick}
            className="ml-auto active:scale-50 scale-100"
          >
            <img src={likeIcon} alt="" className="size-10" />
          </button>
        </div>
        <p className="text-white">{children}</p>
      </div>
    </>
  );
}
