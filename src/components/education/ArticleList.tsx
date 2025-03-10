"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { motion } from "framer-motion";
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
                        <AccordionTrigger className="text-2xl font-semibold uppercase text-red-600">Snow Safety</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            As soft and fun snow is, it poses serious hazards such as avalanches. Learn how to safely travel and avoid risks while on snow in the backcountry with the resources below.
                        </AccordionContent>
                    </AccordionItem>
                </motion.div>
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
                    <AccordionItem value="trip-planning">
                        <AccordionTrigger className="text-2xl font-semibold uppercase">Trip Planning & Field Assessment</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            Planning a trip into the backcountry is no easy task. Weather, terrain, and snow conditions can all impact your trip significantly. Learn how to plan a successful trip and evaluate your surroundings on the field with the resources below.
                        </AccordionContent>
                    </AccordionItem>
                </motion.div>
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
                    <AccordionItem value="bc-ethics">
                        <AccordionTrigger className="text-2xl font-semibold uppercase">Backcountry Etiquette</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            Learn the rules of backcountry travel here, including ski touring and climbing etiquette, as well as outdoor etiquette such as the Leave No Trace principles.
                        </AccordionContent>
                    </AccordionItem>
                </motion.div>
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
                    <AccordionItem value="resources">
                        <AccordionTrigger className="text-2xl font-semibold uppercase">Resources</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            Find other backcountry tools and resources as well as learn how to navigate our website here.
                        </AccordionContent>
                    </AccordionItem>
                </motion.div>
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
                    <AccordionItem value="gear-guides">
                        <AccordionTrigger className="text-2xl font-semibold uppercase">Gear Guides</AccordionTrigger>
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