import { getPlayers } from "@/lib/players";
import Navbar from "@/components/navbar/Navbar";
import Banner from "@/components/homepage/banner/Banner";
import Players from "@/components/homepage/players/Players";
import Footer from "@/components/Footer";

export default async function Home() {
  const initialPlayers = await getPlayers();

  return (
    <div className="min-h-screen selection:bg-[#E7FE29] selection:text-black">
      <Navbar />
      
      <main>
        <Banner />
        <Players initialPlayers={initialPlayers} />
      </main>

      <Footer />
    </div>
  );
}
