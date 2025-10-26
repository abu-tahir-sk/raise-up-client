
const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gradient-to-r from-gray-50 ">
      <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row md:w-[90%] max-w-3xl overflow-hidden p-4 my-8">
        
        {/* Left side image */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://i.ibb.co/TMfXXDyK/image.png"
            alt="Contact illustration"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right side form */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
         
          
          <form className="flex flex-col gap-2 mx-auto md:w-56">
            {/* Email Field */}
            <div>
             
              <div className="flex items-center border-2 mt-3 border-gray-500 rounded-lg overflow-hidden  transition">
                
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 py-3 focus:outline-none border-gray-400 text-gray-700"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              
              <div className="flex items-center border-2 mt-3 border-gray-400 rounded-lg overflow-hidden  transition">
                
                <input
                  type="text"
                 placeholder="Your Email"
                  className="w-full px-3 py-3 focus:outline-none text-gray-700"
                />
              </div>
            </div>
            <div>
             
              <div className="flex items-center border-2 mt-3 border-gray-400 rounded-lg overflow-hidden  transition">
              
                <input
                  type="text"
                 placeholder="Your Message"
                  className="w-full px-3 pt-2 pb-12 focus:outline-none text-gray-700"
                />
              </div>
            </div>

            {/* Button */}
            <button className="mt-4 bg-[#1abde1] text-white font-semibold py-4 rounded-lg hover:bg-gray-800 transition-all">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
