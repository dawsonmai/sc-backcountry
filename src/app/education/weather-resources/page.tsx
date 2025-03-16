"use client"
import Header from "@/components/global/Header";
import Footer2 from "@/components/global/Footer2";
import WeatherForecastResources from "@/components/education/articles/WeatherForecastResources";
import { motion } from "framer-motion";
const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 1.2 },
};

const WeatherResources = () => {
    return (
        <div>
            <div className="flex flex-col p-5">
                <motion.div className="flex flex-col min-h-[calc(100dvh)] pb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                    <Header />
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-grow">
                        <div className="flex flex-col flex-grow bg-gray-700 w-full rounded-3xl sm:p-10 text-8xl justify-center items-center text-center" style={{
                            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/WeatherStation.jpg)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}>
                            <h1 className="inline text-4xl sm:text-6xl md:text-7xl font-medium text-white hyphens-manual lg:hyphens-none">
                                Weather & Forecast Resources
                            </h1>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
                    <WeatherForecastResources />
                </motion.div>
            </div>
            <Footer2 />
        </div>
    )
}

export default WeatherResources;