// app/about/page.tsx
import { Metadata } from "next";
import dynamic from "next/dynamic";

// Dynamically import the About component
const About = dynamic(() => import("@/components/pages/About"), { ssr: false });

export const metadata: Metadata = {
  title: "About | SoCal Backcountry",
  description: "Learn about the mission behind SoCal Backcountry—promoting safe, informed, and responsible winter travel in Southern California's mountain ranges.",
};

export default function AboutPage() {
  return <About />;
}
