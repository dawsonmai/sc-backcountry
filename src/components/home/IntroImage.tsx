import { ArrowRight, CircleAlert, MountainSnow } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const IntroImage = () => {
	return (
		<div className="relative flex flex-col flex-grow w-full rounded-3xl p-6 sm:p-10 justify-between overflow-hidden">
		<Image 
		  src="/bcmtns.jpeg" 
		  alt="Background" 
		  layout="fill" 
		  objectFit="cover" 
		  priority 
		  className="absolute inset-0"
		/>
		<div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
		<div className="relative z-10 flex flex-col h-full justify-between">
		  <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium text-white hyphens-manual lg:hyphens-none lg:w-2/3">
			Welcome to the Southern California Back&shy;country 
			<MountainSnow strokeWidth={1.5} className="inline size-12" />
		  </h1>
  
		  {/* Bottom Section */}
		  <div className="flex flex-col md:flex-row justify-between md:items-end gap-5 mt-6">
			{/* Explore Button */}
			<div className="bg-white rounded-full w-full md:w-96 py-2 flex items-center justify-between pl-6 pr-2">
			  <h2 className="text-black font-medium text-left uppercase sm:text-lg">Explore</h2>
			  <a href="/routes">
				<Button variant="outline" className="bg-black border-2 border-black rounded-full text-white hover:text-black p-3 py-5 justify-center items-center text-center font-semibold text-xl">
				  <ArrowRight size={26} />
				</Button>
			  </a>
			</div>
  
			{/* Caution Box */}
			<div className="bg-white rounded-2xl md:w-1/4">
			  <div className="flex flex-row bg-gray-200 w-full h-1/5 rounded-t-2xl items-center p-3 gap-3">
				<CircleAlert strokeWidth={2.5} className="text-rose-600 size-6" />
				<h2 className="text-black font-medium sm:text-lg uppercase">Caution</h2>
			  </div>
			  <div className="h-4/5 w-full rounded-b-2xl bg-white px-4 py-3">
				<p className="font-light text-sm md:text-base">
				  Backcountry activities are dangerous! Before you go, make sure to check forecasts and conditions and have packed sufficient gear and clothing.
				</p>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	);
};

export default IntroImage;
