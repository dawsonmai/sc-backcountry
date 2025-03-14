import { motion, useInView, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight, Snowflake } from "lucide-react";

const AnimatedNumber = ({ value }: { value: number }) => {
	const ref = useRef(null);
	const inView = useInView(ref);
	const motionValue = useMotionValue(0);
	const rounded = useTransform(motionValue, (latest) => Math.round(latest));

	useEffect(() => {
		if (inView) {
			animate(motionValue, value, {
				duration: 1,
				ease: "easeOut",
			});
		} else {
			animate(motionValue, 0, { duration: 0 });
		}
	}, [inView, motionValue, value]);

	return (
		<motion.h2 ref={ref} className="inline text-5xl lg:text-7xl text-center w-full font-medium font-mono">
			{rounded}
		</motion.h2>
	);
};

const AreaData = () => {
	return (
		<div className="bg-white w-full pb-6">
			<div className="flex flex-col md:flex-row w-full py-10 gap-5">
				<div className="w-full md:w-1/3 h-full">
					<h2 className="uppercase font-semibold text-lg sm:text-xl tracking-wider">Explore The Area</h2>
				</div>
				<div className="w-full md:w-2/3 h-full">
					<h3 className="text-xl md:text-3xl lg:text-4xl">
						Southern California may be know for its warm weather and beautiful beaches, but during its winter, the SoCal backcountry receives tons of snow, allowing for perfect climbing
						and skiing conditions.
					</h3>
				</div>
			</div>
			<div className="flex flex-row w-full items-center gap-5">
				<div className="h-full w-1/6 items-center flex justify-start">
					<Snowflake strokeWidth={1} className="inline size-12" />
				</div>
				<a href="/routes" className="h-full w-5/6 flex items-center flex justify-end w-full h-2/3 font-medium text-3xl p-3 border-b-[1.5px] border-black">
					<button>
						<ArrowRight className="text-black size-10" />
					</button>
				</a>
			</div>
			<div className="flex flex-col sm:flex-row w-full py-12 px-6 justify-center items-center gap-10 sm:gap-5 lg:gap-24">
				<motion.div
					className="w-52 md:w-72 aspect-square rounded-full bg-gray-200 flex flex-col justify-center items-center p-4 md:p-6"
					initial={{ scale: 0.8, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					viewport={{ margin: "-100px" }}
					transition={{ duration: 0.5 }}
				>
					<span className="text-5xl lg:text-7xl text-center w-full font-medium font-mono">
						<AnimatedNumber value={4500} />
					</span>
					<h3 className="text-xl text-center w-full">square miles of terrain</h3>
				</motion.div>

				<motion.div
					className="w-52 md:w-72 aspect-square rounded-full bg-gray-200 flex flex-col justify-center items-center p-4 md:p-6"
					initial={{ scale: 0.8, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					viewport={{ margin: "-100px" }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<AnimatedNumber value={3} />
					<h3 className="text-xl text-center w-full">large & snowy mountain ranges</h3>
				</motion.div>

				<motion.div
					className="w-52 md:w-72 aspect-square rounded-full bg-gray-200 flex flex-col justify-center items-center p-4 md:p-6"
					initial={{ scale: 0.8, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					viewport={{ margin: "-100px" }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<AnimatedNumber value={22} />
					<h3 className="text-xl text-center w-full">peaks taller than 10,000 ft</h3>
				</motion.div>
			</div>
		</div>
	);
};

export default AreaData;
