import { MapPinned, Map, MountainSnow, ChartArea, Snowflake, SunSnow, Thermometer, Wind, WindArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useInView, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
		<motion.h2 ref={ref} className="text-lg font-mono">
			{rounded}
		</motion.h2>
	);
};

const SanGabrielRouteList = () => {
    const [weather, setWeather] = useState<{
        temperature: string;
        windSpeed: string;
        windDirection: number | null; // Changed from string to number | null
        barometer: string;
    }>({
        temperature: "Loading...",
        windSpeed: "Loading...",
        windDirection: null, // Default null
        barometer: "Loading...",
    });

    useEffect(() => {
        fetch("https://api.weather.gov/stations/KCCB/observations/latest")
            .then(res => res.json())
            .then(data => {
                const props = data?.properties;
                const tempC = props?.temperature?.value;

                setWeather({
                    temperature:
                        tempC !== null
                            ? `${((tempC * 9) / 5 + 32).toFixed(0)}`
                            : "N/A",
                    windSpeed:
                        props?.windSpeed?.value !== null
                            ? `${props.windSpeed.value.toFixed(0)}`
                            : "N/A",
                    windDirection:
                        props?.windDirection?.value !== null
                            ? props.windDirection.value
                            : null, // Null if missing
                    barometer:
                        props?.barometricPressure?.value !== null
                            ? `${(props.barometricPressure.value / 3386.39).toFixed(2)}`
                            : "N/A",
                });
            })
            .catch(() => {
                setWeather({
                    temperature: "N/A",
                    windSpeed: "N/A",
                    windDirection: null,
                    barometer: "N/A",
                });
            });
    }, []);

    function windDirection(angle){
		const directions = ["North", "Northeast", "East", "Southeast", "South", "Southwest", "West", "Northwest", "North"];
		
    	let index = Math.round(angle / 45) % 8;
		let direction = directions[index];
        if (weather.windSpeed == "N/A"){
            direction = "N/A";
        }
        return direction;
    }


    return (
        <div className="flex flex-row">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="w-2/3 pr-2">
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
            </motion.div>

            <div className="w-1/3 px-2 flex flex-col gap-6">
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="bg-gray-200 rounded-3xl p-5 shadow-lg shadow-neutral-300">
                    <h3 className="text-xl text-gray-700 font-medium uppercase mb-4">Region Info</h3>
                    <p className="flex flex-row text-lg mb-4"><SunSnow strokeWidth={1.5} className="mr-3 size-7"/> Season: Dec - Apr</p>
                    <p className="flex flex-row text-lg mb-4"><MapPinned strokeWidth={1.5} className="mr-3 size-7"/> Nearest City: Los Angeles</p>
                    <p className="flex flex-row text-lg mb-4"><Map strokeWidth={1.5} className="mr-3 size-7"/><span className="mr-1">Area:</span><AnimatedNumber value={970} /><span className="ml-1">mi²</span></p>
                    <p className="flex flex-row text-lg mb-4"><MountainSnow strokeWidth={1.5} className="mr-3 size-7"/> Tallest Peak: Mt. San Antonio</p>
                    <p className="flex flex-row text-lg mb-4"><ChartArea strokeWidth={1.5} className="mr-3 size-7"/><span className="mr-1">Highest Point:</span><AnimatedNumber value={10064} /><span className="ml-1">ft</span></p>
                    <p className="flex flex-row text-lg mb-4"><Snowflake strokeWidth={1.5} className="mr-3 size-7"/><span className="mr-1">Snowfall (avg):</span> <AnimatedNumber value={164} /> <span className="ml-1">in</span></p>
                </motion.div>
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="bg-gray-200 rounded-3xl p-5 shadow-lg shadow-neutral-300">
                    <h3 className="text-xl text-gray-700 font-medium uppercase mb-4">Current Weather</h3>
                    <p className="flex flex-row text-lg mb-4"><Thermometer strokeWidth={1.5} className="mr-3 size-7"/>Temperature: <span className="font-mono ml-1">{weather.temperature}</span>&deg;F </p>
                    <p className="flex flex-row text-lg mb-4"><Wind strokeWidth={1.5} className="mr-3 size-7"/> Wind Speed: <span className="font-mono ml-1 mr-1">{weather.windSpeed}</span> mph</p>
                    <p className="flex flex-row text-lg mb-4"><ArrowUpRight strokeWidth={1.5} className="mr-3 size-7"/> Wind Direction: <span className="ml-1 ">{windDirection(weather.windDirection)}</span></p>
                    <p className="flex flex-row text-lg mb-4"><WindArrowDown strokeWidth={1.5} className="mr-3 size-7"/> Barometer: <span className="font-mono ml-1 mr-1">{weather.barometer}</span> inHg</p>
                    <div className="w-full flex flex-row justify-center">
                        <Button asChild className="rounded-full text-black bg-transparent border-2 border-black hover:bg-black hover:text-white" variant="outline">
                            <Link href="/conditions">Check Full Report</Link>
                    </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SanGabrielRouteList;