import { MountainSnow, ChartArea, Map, MapPinned, ArrowRight} from "lucide-react";
import { motion } from "framer-motion";
import { useGlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
import { Button } from "../ui/button";

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 5 },
};

const ConditionsPreview = () => {
	
	return (
		<div className="relative w-full rounded-3xl pb-3 pt-6 px-6 shadow-lg shadow-neutral-400 overflow-hidden">
		{/* Background Image */}
		<Image
		  src="/ridge.jpeg"  // Ensure the image is inside /public or use a full path
		  alt="Ridge"
		  layout="fill"
		  objectFit="cover"
		  objectPosition="center"
		  priority
		  className="absolute inset-0"
		/>
  
		{/* Gradient Overlay */}
		<div className="absolute inset-0 bg-black/50" />
  
		{/* Content */}
		<div className="relative z-10 text-white">
		  <h2 className="uppercase font-medium text-2xl md:text-3xl lg:text-4xl">Conditions & Data</h2>
  
		  {/* Mountain Sections */}
		  {[
			{
			  name: "San Gabriel Mountains",
			  tallestPeak: "Mt. San Antonio",
			  highestElevation: "10,064 ft",
			  area: "970 mi²",
			  nearestCity: "Los Angeles",
			},
			{
			  name: "San Jacinto Mountains",
			  tallestPeak: "Mt. San Jacinto",
			  highestElevation: "10,834 ft",
			  area: "1,455 mi²",
			  nearestCity: "Palm Springs",
			},
			{
			  name: "San Bernardino Mountains",
			  tallestPeak: "Mt. San Gorgonio",
			  highestElevation: "11,503 ft",
			  area: "2,063 mi²",
			  nearestCity: "San Bernardino",
			},
		  ].map((mountain, index) => (
			<motion.div key={index} initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
			  <div className="text-center py-1">
				<h3 className="font-medium text-md lg:text-xl">{mountain.name}</h3>
				<div className="flex flex-col md:flex-row gap-3 justify-center p-3">
				  {[
					{ icon: <MountainSnow strokeWidth={1.5} className="size-5" />, text: `Tallest Peak: ${mountain.tallestPeak}` },
					{ icon: <ChartArea strokeWidth={1.5} className="size-5" />, text: `Highest Elevation: ${mountain.highestElevation}` },
					{ icon: <Map strokeWidth={1.5} className="size-5" />, text: `${mountain.area}` },
					{ icon: <MapPinned strokeWidth={1.5} className="size-5" />, text: `Nearest City: ${mountain.nearestCity}` },
				  ].map((item, idx) => (
					<div key={idx} className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
					  {item.icon}
					  <p className="w-full text-center text-sm md:text-md">{item.text}</p>
					</div>
				  ))}
				</div>
			  </div>
			</motion.div>
		  ))}
  
		  {/* Arrow Button */}
		  <div className="flex justify-end">
			<a href="/conditions">
			  <Button variant="outline" className="text-black hover:text-white border-white bg-white hover:bg-black rounded-full p-3 py-5">
			  	<ArrowRight className="size-9" />
			  </Button>
			</a>
		  </div>
		</div>
	  </div>
	);
};

export default ConditionsPreview;
