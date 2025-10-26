


const SubscribeSection = () => {


  return (
    <section className="flex items-center justify-center py-6 ">
      <div className="text-center bg-[#1abde1] p-8 rounded-md shadow-md min-h-[40vh] md:min-h-[70vh]   mx-auto w-full  flex flex-col justify-center items-center">
        <h2 className="text-5xl font-extrabold mb-2 text-white">
          Subscribe our newsletter
        </h2>
        <p className=" my-4 text-white">
          New Things Will Always Update Regularl
        </p>

    
         
            <form
                       
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <div className="relative w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="w-full px-4 py-3 pr-28 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-100"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1   px-5 font-bold transition-all "
                >
                  Subscribe
                </button>
              </div>
            </form>
         
        
      </div>
    </section>
  );
};
export default SubscribeSection;
