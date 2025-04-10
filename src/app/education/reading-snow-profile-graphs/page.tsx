import { Metadata } from "next";
import dynamic from "next/dynamic";

const ReadSnowProfileGraphArticle = dynamic(() => import("@/components/pages/articles/ReadSnowProfileGraphArticle"), { ssr: false });

export const metadata: Metadata = {
  title: "How to Read a Snow Profile Graph",
  description: "This webpage provides a clear and easy-to-understand guide on how to read a snow profile graph. It explains the key elements of the graph, including the axes, which represent snow depth and hardness, and how to interpret the data to assess snow conditions. The article covers the meanings of snow hardness values (F, 4F, 1F, P, K) and their importance in evaluating snow stability, offering valuable insight for anyone venturing into the backcountry.",
};

export default function ReadSnowProfileGraphPage() {
  return <ReadSnowProfileGraphArticle />;
}