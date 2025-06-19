import { Metadata } from "next";
import dynamic from "next/dynamic";

const BaldyBowlRoutes = dynamic(() => import("@/components/pages/route-pages/route-guides/BaldyBowlRoutes"), { ssr: false });

export const metadata: Metadata = {
  title: "Baldy Bowl | SoCal Backcountry",
  description: "Explore the numerous winter climbing and skiing routes on the Baldy Bowl on Mt. Baldy.",
};

export default function BaldyBowlGuidePage() {
  return <BaldyBowlRoutes />;
}