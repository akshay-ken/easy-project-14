import starIcon from "../assets/images/icon-star.svg";

export function RatingCard({ children }) {
  return (
    <>
      <div className="w-full flex flex-col bg-Dark-Grayish-Magenta items-center gap-y-4 p-2 rounded-xl">
        <div className="flex flex-row justify-center items-center gap-x-4">
          <img src={starIcon} className="size-6" alt="" />
          <img src={starIcon} className="size-6" alt="" />
          <img src={starIcon} className="size-6" alt="" />
          <img src={starIcon} className="size-6" alt="" />
          <img src={starIcon} className="size-6" alt="" />
        </div>
        <p className="font-one font-bold text-2xl text-Very-Dark-Magenta">
          {children}
        </p>
      </div>
    </>
  );
}
