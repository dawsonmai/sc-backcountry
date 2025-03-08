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


const DropdownInfo = () => {
    return (
        <div>
            <Accordion type="single" collapsible className="w-full px-10">
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
                    <AccordionItem value="history">
                        <AccordionTrigger className="text-2xl font-semibold uppercase">Our History</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            <p className="py-2">
                                In the spring of 2023, after the Southern Californian mountains received the most snow they had in multiple decades, SC Backcountry founder Dawson Mai planned a mountaineering trip up Mt. San Antonio, also known as Mt. Baldy. He realized that there was a lack of resources documenting the conditions and weather of the mountain, leading to a confusing and much longer than usual planning process. Fortunately, Dawson knew of numerous online resources that, when combined, provided a vague summary of what to expect. But the thought of a newer, less experienced climber, facing the same issues worried him. 
                                <br />
                                Dawson knew of numerous online resources that, when combined, provided a vague summary of what to expect. But the thought of a newer, less experienced climber, facing the same issues worried him. 
                                <br />
                                During his climb, Dawson saw climbers with no helmets and improper traction equipment despite the steep snow face and risk of rockfall that stood ahead. It was no surprise when he learned of the numerous accidents and even deaths that occur in these mountains each year.
                                <br />
                                So, in 2024, SC Backcountry was created, a resource hub for local climbers and skiers. The platform aims to provide a resource where climbers and backcountry skiers can gather all the information they need for their upcoming trip without having to sift through various websites and pay for the subscriptions of other broad outdoor apps. The project also emphasizes snow safety and education in order to prepare and educate less experienced winter explorers for Southern California&apos;s beautiful, but often unpredictable and hostile alpine environment. 
                                <br />
                                Our mission is to raise awareness, educate, and prepare adventurers for Southern California&apos;s vast and snowy winter backcountry. Remember that when climbing a mountain, it&apos;s always further, taller, and harder than it looks. Use your resources and plan your trip thoroughly before you go.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </motion.div>
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
                    <AccordionItem value="team">
                        <AccordionTrigger className="text-2xl font-semibold uppercase">Our Team</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            <div className="flex flex-row">
                                <div className="w-1/4 flex flex-col justify-between">
                                    <div>
                                        <h2 className="font-semibold text-xl uppercase">Dawson Mai</h2>
                                        <h3 className="text-lg">Founder</h3>
                                    </div>
                                    <div className="rounded-xl bg-gray-400 h-60"style={{
                                        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), url(Dawson.jpeg)",
                                        backgroundSize: "cover",
                                        backgroundPosition: "right",
                                    }} />
                                </div>
                                <div className="w-3/4 px-6 flex flex-col items-end">
                                    <p className="py-2">
                                        Dawson Mai is currently a high school student passionate in skiing and mountaineering. He founded SC Backcountry in 2024 hoping to make his local mountains a safer place. Ever since he was 12, he was fascinated by the mountains and has climbed various mountains since then, including Mt. Baldy in the winter, Mt. Adams, Mt. Shasta, and Mt. Baker. He has also completed the AIARE Level 1 course and is plans to pursue Level 2 in the near future.
                                        <br />
                                        Through SC Backcountry, Dawson hopes to be able to connect his academic interest toward STEM and his outdoor passion to impact his local climbing community. He also hopes to share the knowledge he has gained over the years in the mountains to other aspiring climbers and skiers in the area.
                                        <br />
                                        In the future, Dawson hopes to be able to climb the mountains around the world, including those in Alaska, South American, and the Himalayas.
                                    </p>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </motion.div>
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
                    <AccordionItem value="report">
                        <AccordionTrigger className="text-2xl font-semibold uppercase">Season Report</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            Each season, we release a report documenting our impact and other important statistics. Since this is our first season in operation, we have yet to publish a report.
                        </AccordionContent>
                    </AccordionItem>
                </motion.div>
            </Accordion>
        </div>
    );
};

export default DropdownInfo;