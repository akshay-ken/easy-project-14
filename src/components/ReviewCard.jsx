export function ReviewCard({ personImage, personName, children }) {
  return (
    <>
      <div className="w-full font-one text-xl/6 felx flex-col p-6 bg-Very-Dark-Magenta rounded-xl">
        <div className="flex flex-row gap-x-6 items-center mb-4">
          <img src={personImage} className="size-12 rounded-full" alt="" />
          <div className="flex flex-col font-medium ">
            <p className=" text-white">{personName}</p>
            <p className="text-Soft-Pink">Verified Buyer</p>
          </div>
        </div>
        <p className="text-white">{children}</p>
      </div>
    </>
  );
}
