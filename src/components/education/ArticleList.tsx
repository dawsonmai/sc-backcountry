"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";
const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 1.2 },
};

const ArticleList = () => {
    return (
        <div>
            <Accordion type="single" collapsible className="w-full px-10">
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
                    <AccordionItem value="snow-safety">
                        <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-semibold uppercase text-red-600">Snow Safety</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            As soft and fun snow is, it poses serious hazards such as avalanches. Learn how to safely travel and avoid risks while on snow in the backcountry with the resources below.
                        </AccordionContent>
                    </AccordionItem>
                </motion.div>
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
                    <AccordionItem value="trip-planning">
                        <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-semibold uppercase">Trip Planning & Field Assessment</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            Planning a trip into the backcountry is no easy task. Weather, terrain, and snow conditions can all impact your trip significantly. Learn how to plan a successful trip and evaluate your surroundings on the field with the resources below.
                        </AccordionContent>
                    </AccordionItem>
                </motion.div>
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
                    <AccordionItem value="bc-ethics">
                        <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-semibold uppercase">Backcountry Etiquette</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            Learn the rules of backcountry travel here, including ski touring and climbing etiquette, as well as outdoor etiquette such as the Leave No Trace principles.
                        </AccordionContent>
                    </AccordionItem>
                </motion.div>
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
                    <AccordionItem value="resources">
                        <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-semibold uppercase">Resources</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            <p className="mb-4">Find other backcountry tools and resources as well as learn how to navigate our website here.</p>
                            <div className="rounded-2xl bg-gray-200 p-6 flex flex-col sm:flex-row">
                                <div className="h-56 w-full sm:w-64 mr-10 rounded-2xl" style={{
                                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(WeatherStation.jpg)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }} />
                                <div className="w-full sm:w-2/3 flex flex-col justify-between items-center text-center sm:text-start sm:items-start">
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-medium">Weather & Forecast Resources</h2>
                                        <h3 className="text-md md:text-lg italic">Weather</h3>
                                        <p className="text-md md:text-lg font-light">Find different resources for checking weather, conditions, and forecasts based on area.</p>
                                    </div>
                                    <Button asChild className="rounded-full text-black bg-gray-200 border-2 border-black hover:bg-black hover:text-white" variant="outline">
                                        <Link href="/education/weather-resources">Read More</Link>
                                    </Button>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </motion.div>
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
                    <AccordionItem value="gear-guides">
                        <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-semibold uppercase">Gear Guides</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            Gear is essential for keeping you safe and having fun. Learn how to properly pick and use gear for your backcountry travel plans with the resources below. 
                        </AccordionContent>
                    </AccordionItem>
                </motion.div>
            </Accordion>
        </div>
    );
};

export default ArticleList;