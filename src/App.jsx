import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="lato-thin">
      <header>
        <Navbar />
      </header>
      <main className="min-h-[calc(100vh-283px)]">
        <Outlet/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
