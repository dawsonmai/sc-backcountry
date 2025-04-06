import { Metadata } from "next";
import dynamic from "next/dynamic";

const SanJacintoMtns = dynamic(() => import("@/components/pages/route-pages/SanJacintoMtns"), { ssr: false });

export const metadata: Metadata = {
  title: "San Jacinto Mountains | SoCal Backcountry",
  description: "Explore the wide range of winter mountaineering and backcountry skiing routes and lines in the iconic San Jacinto Mountains, easily accessible from the Palm Springs Aerial Tramway.",
};

export default function SanJacintoMountainsPage() {
  return <SanJacintoMtns />;
}