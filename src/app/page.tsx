import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* 
        Scalable approach: 
        You can easily add more sections here as the project grows.
        Each section can be a separate component in src/components.
      */}
    </>
  );
}
