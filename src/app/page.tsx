import Header from "../components/home/Header";
import IntroImage from "@/components/home/IntroImage";
import AreaData from "@/components/home/AreaData";
import TransitionImage from "@/components/home/TransitionText";
import ExploreArea from "@/components/home/ExploreArea";
import ConditionsPreview from "@/components/home/ConditionsPreview";
export default function Home () {
  return (
    <div className="flex flex-col h-full p-5">
      <Header />
      <IntroImage />
      <AreaData />
      <TransitionImage />
      <ExploreArea />
      <ConditionsPreview />
    </div>
  );
}