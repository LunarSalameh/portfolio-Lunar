import Image from "next/image";
import LandingPage from "./pages/landingPage/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LandingPage />
      
      <a href="./pages/contactMe"> contact me </a>
      {/* <a href="./pages/projects"> projects page </a> */}
       
    </main>
  );
}
