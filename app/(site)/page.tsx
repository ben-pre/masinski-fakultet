import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Mašinski fakultet Sarajevo",
  description: "",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Testimonial />
      <Feature />
    </main>
  );
}
