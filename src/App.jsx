import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="lato-thin">
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-white backdrop-blur-md  transition-colors duration-300">
        <Navbar />
      </header>
      <main className="min-h-[calc(100vh-283px)] pt-24">
        <Outlet/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
