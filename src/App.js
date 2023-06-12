import React from "react";
import manPic from "./assets/man.svg";
import womanPic from "./assets/woman.svg";

const App = () => {
  return (
    <div className="md:w-[1180px] mx-auto flex h-screen flex-1 flex-col gap-10 items-center align-middle px-6 py-12 lg:px-8 md:grid grid-cols-2">
      <div>
        <h2 className="text-[48px] font-normal">Some Awesome Title</h2>
        <p className="text-[20px] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="md:grid  grid-cols-2 ">
        <div className="manStyle  relative overflow-hidden backdrop-blur-md hover:z-50 hover:scale-110 hover:shadow-2xl transition-all">
          <img src={manPic} className="absolute bottom-1 " />
        </div>

        <div className="womanStyle relative overflow-hidden backdrop-blur-md top-[56px] right-[40px] hover:z-50 hover:scale-110 hover:shadow-2xl transition-all">
          <img src={womanPic} className="absolute bottom-0 " />
        </div>
      </div>
    </div>
  );
};

export default App;
