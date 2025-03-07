import { MountainSnow, ChartArea, Map, MapPinned, ArrowRight} from "lucide-react";
import { motion } from "framer-motion";
import { useGlobalContext } from "@/context/GlobalContext";

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 5 },
};

const ConditionsPreview = () => {
	
	return (
		<div className="w-full h-[50vh] rounded-3xl pb-3 pt-6 px-6" style={{
			backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(ridge.jpeg)",
			backgroundSize: "cover",
			backgroundPosition: "center",
		  }}>
			<h2 className="uppercase font-medium text-4xl text-white">Conditions & Data</h2>
			
			<motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
				<div className="items-center text-center text-white pb-1">
					<h3 className="font-medium text-xl">San Gabriel Mountains</h3>
					<div className="flex flex-row gap-3 justify-center p-3">
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<MountainSnow strokeWidth={1.5} className="size-5" />
							<p>Tallest Peak: Mt. San Antonio</p>
						</div>
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<ChartArea strokeWidth={1.5} className="size-5" />
							<p>Highest Elevation: 10,064 ft</p>
						</div>
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<Map strokeWidth={1.5} className="size-5" />
							<p>970 mi<sup>2</sup></p>
						</div>
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<MapPinned strokeWidth={1.5} className="size-5" />
							<p>Nearest City: Los Angeles</p>
						</div>
					</div>
				</div>
			</motion.div>
			<motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
				<div className="items-center text-center text-white py-1">
					<h3 className="font-medium text-xl">San Jacinto Mountains</h3>
					<div className="flex flex-row gap-3 justify-center p-3">
					<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<MountainSnow strokeWidth={1.5} className="size-5" />
							<p>Tallest Peak: Mt. San Jacinto</p>
						</div>
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<ChartArea strokeWidth={1.5} className="size-5" />
							<p>Highest Elevation: 10,834 ft</p>
						</div>
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<Map strokeWidth={1.5} className="size-5" />
							<p>1,455 mi<sup>2</sup></p>
						</div>
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<MapPinned strokeWidth={1.5} className="size-5" />
							<p>Nearest City: Palm Springs</p>
						</div>
					</div>
				</div>
			</motion.div>
			<motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
				<div className="items-center text-center text-white pt-1">
					<h3 className="font-medium text-xl">San Bernardino Mountains</h3>
					<div className="flex flex-row gap-3 justify-center p-3">
					<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<MountainSnow strokeWidth={1.5} className="size-5" />
							<p>Tallest Peak: Mt. San Gorgonio</p>
						</div>
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<ChartArea strokeWidth={1.5} className="size-5" />
							<p>Highest Elevation: 11,503 ft</p>
						</div>
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<Map strokeWidth={1.5} className="size-5" />
							<p>2,063 mi<sup>2</sup></p>
						</div>
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<MapPinned strokeWidth={1.5} className="size-5" />
							<p>Nearest City: San Bernardino</p>
						</div>
					</div>
				</div>
			</motion.div>
			<div className="flex justify-end">
				<a href="/conditions">
					<ArrowRight className="size-9 text-black bg-white rounded-full p-2" />
				</a>
			</div>
		</div>
	);
};

export default ConditionsPreview;
