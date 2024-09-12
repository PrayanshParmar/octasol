import React from "react";

type Props = {};

const CoverUpPage = (props: Props) => {
  return (
    <>
      <div className="w-full h-full bg-transparent backdrop-blur-sm z-30 fixed top-0 right-0 ">
        <div className="flex justify-center items-center h-screen w-full text-4xl md:text-5xl lg:text-7xl overflow-hidden">
          Coming Soon
        </div>
      </div>
    </>
  );
};

export default CoverUpPage;