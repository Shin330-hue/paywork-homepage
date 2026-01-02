import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contents from "@/components/Contents";
import Donation from "@/components/Donation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Contents />
        <Donation />
      </main>
      <Footer />
    </>
  );
}
