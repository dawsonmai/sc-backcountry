import { Metadata } from "next";
import dynamic from "next/dynamic";

const Education = dynamic(() => import("@/components/pages/Education"), { ssr: false });

export const metadata: Metadata = {
  title: "Education | SoCal Backcountry",
  description: "Access valuable resources and expert advice on backcountry safety. Explore articles covering essential topics like weather forecasting, gear selection, avalanche terrain assessment, and understanding snow profile graphs to enhance your knowledge and make informed decisions in the backcountry.",
};

export default function AboutPage() {
  return <Education />;
}