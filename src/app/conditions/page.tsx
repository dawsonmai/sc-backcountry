import { Metadata } from "next";
import dynamic from "next/dynamic";

const Conditions = dynamic(() => import("@/components/pages/Conditions"), { ssr: false });

export const metadata: Metadata = {
  title: "Conditions | SoCal Backcountry",
  description: "Stay informed with up-to-date backcountry conditions for Southern California's mountain ranges. View current weather, forecasts, and snow conditions for the San Bernardino, San Gabriel, and San Jacinto ranges to help you plan your next adventure safely.",
};

export default function ConditionsPage() {
  return <Conditions />;
}