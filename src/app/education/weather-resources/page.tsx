import { Metadata } from "next";
import dynamic from "next/dynamic";

const WeatherResourceArticle = dynamic(() => import("@/components/pages/articles/WeatherResourceArticle"), { ssr: false });

export const metadata: Metadata = {
  title: "Weather & Forecast Resources",
  description: "Mountain weather is unpredictable, and staying updated with accurate forecasts is crucial before heading into the backcountry. This page explains how to use multiple weather sources to gain a better understanding of the conditions you might face. Learn how to analyze forecasts from different providers, track data patterns, and prepare for any situation. Explore essential weather resources for the San Gabriel, San Bernardino, and San Jacinto mountain ranges, including mountain forecasts, ski resort reports, and trail updates, to help you make informed decisions and stay safe during your backcountry adventures.",
};

export default function WeatherResourceArticlePage() {
  return <WeatherResourceArticle />;
}