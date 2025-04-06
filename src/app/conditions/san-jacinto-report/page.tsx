import { Metadata } from "next";
import dynamic from "next/dynamic";

const SanJacintoReport = dynamic(() => import("@/components/pages/condition-reports/SanJacintoReport"), { ssr: false });

export const metadata: Metadata = {
  title: "San Jacinto Mountain Report | SoCal Backcountry",
  description: "Stay updated with the San Jacinto Mountain Report. Learn about current trail conditions, snowpack data, and upcoming weather forecasts.",
};

export default function SanJacintoReportPage() {
  return <SanJacintoReport />;
}