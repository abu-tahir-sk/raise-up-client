import Banner from "./Banner";
import { Typewriter } from "react-simple-typewriter";
import HomeCampaign from "./HomeCampaign";
import FAQ from "../../components/FAQ";
import Contact from "../../components/Contact";
import SubscribeSection from "../../components/SubscribeSection";
const Home = () => {
  
  return (
    <div className="w-11/12 mx-auto">
      <div>
        <Banner></Banner>
      </div>
      <div className="py-14">
        <div className="text-center">
          <div className="divider">
            <span className="text-3xl py-4 px-1 font-extrabold bg-cyan-600 rounded-full"></span>
            <h2 className="font-extrabold text-3xl">
              <Typewriter
                words={["Support Dreams", "Running Campaign "]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                // onLoopDone={handleDone}
                // onType={handleType}
              />
            </h2>
          </div>

          <p className="font-serif py-3 text-[18px]">
            Join us in a marathon to support underprivileged children’s
            education. Every step you take contributes to building a brighter
            future!s
          </p>
        </div>
        <HomeCampaign />
      </div>
      <div className="pb-8">
        <h2 className="text-3xl font-serif text-center py-3">
          FAQs - RISE Up{" "}
        </h2>

        <div class="relative w-6/12 mx-auto flex justify-center items-center ">
          <div class="w-full h-1 bg-[#31cfd4]"></div>

          <div class="absolute -bottom-5 w-0 h-0 border-l-20 border-r-20 border-t-20 border-l-transparent border-r-transparent border-t-[#31cfd4]"></div>
        </div>
        <FAQ/>
      </div>
      <div className="pb-8">
        <div className="divider"><h3 className="text-3xl font-extrabold py-6">Contact Us</h3></div>
        <Contact/>
      </div>
      <div>
        <SubscribeSection/>
      </div>
    </div>
  );
};

export default Home;
