import { Metadata } from "next";
import dynamic from "next/dynamic";

const SanGabrielMtns = dynamic(() => import("@/components/pages/route-pages/SanGabrielMtns"), { ssr: false });

export const metadata: Metadata = {
  title: "San Gabriel Mountains | SoCal Backcountry",
  description: "Explore the wide range of winter mountaineering and backcountry skiing routes and lines in the iconic San Gabriel Mountains, only a few miles north of LA.",
};

export default function SanGabrielMountainsPage() {
  return <SanGabrielMtns />;
}