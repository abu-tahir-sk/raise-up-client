import Banner from "./Banner";
import { Typewriter } from 'react-simple-typewriter'
const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div>
        <Banner></Banner>
      </div>
      <div className="py-14">
        <div className="text-center">
            <div className="divider"><span className="text-3xl py-4 px-1 font-extrabold bg-cyan-600 rounded-full"></span>
            <h2 className="font-extrabold text-3xl">
         
          <Typewriter
            words={['Support Dreams', 'Running Campaign ', ]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}

            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </h2>
            </div>
          
        <p className="font-serif py-3">Join us in a marathon to support underprivileged children’s education. Every step you take contributes to building a brighter future!s</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
