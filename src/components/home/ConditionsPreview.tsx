import { Thermometer, Snowflake, Wind, MoveUpLeft, Eye, Cloudy, CloudSun, MoveDown, MoveLeft, ArrowRight} from "lucide-react";
import { motion } from "framer-motion";
import { useGlobalContext } from "@/context/GlobalContext";

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 5 },
};

const ConditionsPreview = () => {

	const { setSanBernardinoObs: SanBernardinoObs, setSanGabrielObs: SanGabrielObs, setSanJacintoObs: SanJacintoObs} = useGlobalContext();

	console.log("SanBernardinoObs: " + SanBernardinoObs)
	return (
		<div className="w-full h-[50vh] rounded-3xl p-6" style={{
			backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(ridge.jpeg)",
			backgroundSize: "cover",
			backgroundPosition: "center",
		  }}>
			<h2 className="uppercase font-medium text-4xl text-white">Conditions</h2>
			
			<motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
				<div className="items-center text-center text-white pb-1">
					<h3 className="font-medium text-xl">San Gabriel Mountains</h3>
					<div className="flex flex-row gap-3 justify-center p-3">
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<Thermometer strokeWidth={1.5} className="size-5" />
							<p>F</p>
						</div>
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<Snowflake strokeWidth={1.5} className="size-5" />
							<p>Snowing</p>
						</div>
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<Wind strokeWidth={1.5} className="size-5" />
							<p>20 mph windspeed</p>
						</div>
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<MoveUpLeft strokeWidth={1.5} className="size-5" />
							<p>SE wind direction</p>
						</div>
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<Eye strokeWidth={1.5} className="size-5" />
							<p>0.5 mi visiblity</p>
						</div>
					</div>
				</div>
			</motion.div>
			<motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
				<div className="items-center text-center text-white py-1">
					<h3 className="font-medium text-xl">San Jacinto Mountains</h3>
					<div className="flex flex-row gap-3 justify-center p-3">
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<Thermometer strokeWidth={1.5} className="size-5" />
							<p>35°F</p>
						</div>
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<Cloudy strokeWidth={1.5} className="size-5" />
							<p>Cloudy</p>
						</div>
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<Wind strokeWidth={1.5} className="size-5" />
							<p>8 mph windspeed</p>
						</div>
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<MoveDown strokeWidth={1.5} className="size-5" />
							<p>N wind direction</p>
						</div>
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<Eye strokeWidth={1.5} className="size-5" />
							<p>7 mi visiblity</p>
						</div>
					</div>
				</div>
			</motion.div>
			<motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
				<div className="items-center text-center text-white py-1">
					<h3 className="font-medium text-xl">San Bernardino Mountains</h3>
					<div className="flex flex-row gap-3 justify-center p-3">
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<Thermometer strokeWidth={1.5} className="size-5" />
							<p>42°F</p>
						</div>
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<CloudSun strokeWidth={1.5} className="size-5" />
							<p>Partly Cloudy</p>
						</div>
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<Wind strokeWidth={1.5} className="size-5" />
							<p>3 mph windspeed</p>
						</div>
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<MoveLeft strokeWidth={1.5} className="size-5" />
							<p>E wind direction</p>
						</div>
						<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
							<Eye strokeWidth={1.5} className="size-5" />
							<p>10 mi visiblity</p>
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
