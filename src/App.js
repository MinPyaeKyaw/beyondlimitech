import "./App.css";
import Navbar from "./components/common/Navbar/Navbar";
import Banner from "./components/Home/Banner/Banner";
import Offer from "./components/Home/Offer/Offer";
import Clients from "./components/Home/Clients/Clients";
import Reviews from "./components/Home/Reviews/Reviews";
import Footer from "./components/common/Footer/Footer";
import OpeningLoader from "./components/common/OpeningLoader/OpeningLoader";
import { useEffect, useState } from "react";
import BusinessMove from "./components/Home/BusinessMove/BusinessMove";

function App() {
  const [loading, setLoading] = useState(true);
  const [isFix, setIsFix] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 1000) {
      setIsFix(true);
    } else {
      setIsFix(false);
    }
  };

  if (loading) {
    return <OpeningLoader setLoading={setLoading} />;
  } else {
    return (
      <div className="App">
        <Navbar isFix={isFix} />

        <Banner />

        <Offer />

        <BusinessMove />

        <Offer />

        <Reviews />

        <Clients />

        <Footer />
      </div>
    );
  }
}

export default App;
