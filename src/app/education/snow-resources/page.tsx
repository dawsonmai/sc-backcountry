import { Metadata } from "next";
import dynamic from "next/dynamic";

const SnowResourceArticle = dynamic(() => import("@/components/pages/articles/SnowResourceArticle"), { ssr: false });

export const metadata: Metadata = {
  title: "Snow Depth & Snowpack Resources",
  description: "This page provides essential information on how snow depth and pack affect your backcountry skiing experience. Learn about the risks of deep, unstable snow and the challenges of lower snowpacks. Discover useful resources to check snow conditions, including detailed snow profile graphs, the USDA Snow Depth Map, and local ski resort data. Additionally, explore live webcam feeds to visually assess snow conditions in Southern California's mountain ranges. Stay informed and make safer decisions in the backcountry.",
};

export default function SnowResourceArticlePage() {
  return <SnowResourceArticle />;
}