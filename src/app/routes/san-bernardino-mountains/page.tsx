import { Metadata } from "next";
import dynamic from "next/dynamic";

const SanBernardinoMtns = dynamic(() => import("@/components/pages/route-pages/SanBernardinoMtns"), { ssr: false });

export const metadata: Metadata = {
  title: "San Bernardino Mountains | SoCal Backcountry",
  description: "Explore the wide range of winter mountaineering and backcountry skiing routes and lines in the iconic San Bernardino Mountains, home to SoCal's tallest mountains.",
};

export default function SanBernardinoMountainsPage() {
  return <SanBernardinoMtns />;
}