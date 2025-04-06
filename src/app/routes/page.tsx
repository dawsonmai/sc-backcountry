import { Metadata } from "next";
import dynamic from "next/dynamic";

const Routes = dynamic(() => import("@/components/pages/Routes"), { ssr: false });

export const metadata: Metadata = {
  title: "Routes | SoCal Backcountry",
  description: "Explore detailed routes for backcountry skiing and mountaineering across Southern California's most iconic mountain ranges. Select from the San Bernardino, San Gabriel, and San Jacinto ranges to discover the best routes, conditions, and essential information for your next adventure.",
};

export default function AboutPage() {
  return <Routes />;
}