import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/homepage/banner/Banner";
import Players from "./components/homepage/players/Players";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayer();
  const [coin, setCoin] = useState(0);

  const handleAddCoin = () => {
    setCoin(prev => prev + 600000);
    toast.success("Credit Added! Your balance has been updated.", {
      position: "top-center",
      theme: "dark"
    });
  };

  return (
    <div className="min-h-screen bg-[#030712] selection:bg-[#E7FE29] selection:text-black">
      <Navbar coin={coin} />
      
      <main>
        <Banner handleAddCoin={handleAddCoin} />
        
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
              <span className="loading loading-ring loading-lg text-[#E7FE29]"></span>
              <p className="text-gray-500 font-medium animate-pulse">Scouting Players...</p>
            </div>
          }
        >
          <Players
            playersPromise={playersPromise}
            setCoin={setCoin}
            coin={coin}
          />
        </Suspense>
      </main>

      <Footer />

      {/* global notifications */}
      <ToastContainer pauseOnFocusLoss={false} autoClose={3000} />
    </div>
  );
}

export default App;
