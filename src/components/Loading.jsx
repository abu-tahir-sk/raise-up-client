import { div } from "framer-motion/client";
import { Mosaic } from "react-loading-indicators";

const Loading = () => {
 
  return (
    <div className="w-full h-[100vh] flex flex-col pt-12 items-center">
      <Mosaic color="#32cd32" size="medium" text="" textColor="" />
    </div>
  );
};

export default Loading;
