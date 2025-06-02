import { MapPinned, Map, MountainSnow, ChartArea, Snowflake, SunSnow } from "lucide-react";
import { motion, useInView, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type Route = {
    name: string;
    length: number;
    elevationGain: number;
    climb: boolean;
    ski: boolean;
    difficulty: string;
}

const routes: Route[] = [
    {
        name: "Baldy Bowl Routes",
        length: 7,
        elevationGain: 4000,
        climb: true,
        ski: true,
        difficulty: "Hard",
    },
    {
        name: "Baldy Bowl Standard Route",
        length: 11,
        elevationGain: 4000,
        climb: true,
        ski: true,
        difficulty: "Medium",
    },
    {
        name: "Devil's Backbone",
        length: 14,
        elevationGain: 3900,
        climb: true,
        ski: false,
        difficulty: "Medium",
    },
    {
        name: "Mt. Baldy East Face",
        length: 7,
        elevationGain: 2500,
        climb: false,
        ski: true,
        difficulty: "Medium",
    },
];

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 5 },
};

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
		<motion.h2 ref={ref} className="text-lg">
			{rounded}
		</motion.h2>
	);
};

const SanBernardinoRouteList = () => {
    return (
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="flex flex-row">
            <div className="w-2/3 pr-2">
                <div className="flex flex-row justify-between p-4 pt-0 border-b-2 border-black">
                    <h2 className="font-medium text-md">Route/Area Name</h2>
                    <div className="flex flex-row w-1/2 justify-between">
                        <div className="font-medium text-md">Length</div>
                        <div className="font-medium text-md">Elevation Gain</div>
                        <div className="font-medium text-md">Difficulty</div>
                        <div className="font-medium text-md">Climb/Ski</div>
                    </div>
                </div>
                {/* <div className="space-y-4 py-4">
                    {routes.map((route, index) => (
                        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} key={index} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition flex flex-row justify-between">
                            <h2 className="text-md">{route.name}</h2>
                            <div className="text-md flex flex-row w-1/2 justify-between text-center">
                                <div>{route.length} mi</div>
                                <div>{route.elevationGain} ft</div>
                                <div>{route.difficulty}</div>
                                <div>{route.climb ? "Y" : "N"} / {route.ski ? "Y" : "N"}</div>
                            </div>
                        </motion.div>
                    ))}
                </div> */}
            </div>

            <div className="w-1/3 px-2">
                <div className="bg-gray-200 rounded-3xl h-full p-5 shadow-lg shadow-neutral-300">
                    <h3 className="text-2xl font-medium mb-4">Region Info</h3>
                    <p className="flex flex-row text-lg mb-4"><SunSnow strokeWidth={1.5} className="mr-3 size-7"/> Season: Dec - Apr</p>
                    <p className="flex flex-row text-lg mb-4"><MapPinned strokeWidth={1.5} className="mr-3 size-7"/> Nearest City: San Bernardino</p>
                    <p className="flex flex-row text-lg mb-4"><Map strokeWidth={1.5} className="mr-3 size-7"/><span className="mr-1">Area:</span><AnimatedNumber value={2063} /><span className="ml-1">mi²</span></p>
                    <p className="flex flex-row text-lg mb-4"><MountainSnow strokeWidth={1.5} className="mr-3 size-7"/> Tallest Peak: Mt. San Gorgonio</p>
                    <p className="flex flex-row text-lg mb-4"><ChartArea strokeWidth={1.5} className="mr-3 size-7"/><span className="mr-1">Highest Point:</span><AnimatedNumber value={11503} /><span className="ml-1">ft</span></p>
                    <p className="flex flex-row text-lg mb-4"><Snowflake strokeWidth={1.5} className="mr-3 size-7"/><span className="mr-1">Snowfall (avg):</span> <AnimatedNumber value={105} /> <span className="ml-1">in</span></p>
                </div>
            </div>
            
        </motion.div>
    )
}

export default SanBernardinoRouteList;