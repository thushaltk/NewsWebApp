import Image from "next/image";
import LandingPage from "./components/landing-page/page";
import Header from "./components/header/page";
import BreakingNews from "./components/breaking-news/page";

export default function Home() {
  return (
    <>
      <Header />
      <BreakingNews />
      <LandingPage />
    </>
  );
}
