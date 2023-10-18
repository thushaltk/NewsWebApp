import Image from "next/image";
import LandingPage from "./components/landing-page/page";
import Header from "./components/header/page";

export default function Home() {
  return (
    <>
      <Header />
      <LandingPage />
    </>
  );
}
