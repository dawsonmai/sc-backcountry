"use client"
import { motion } from "framer-motion";

const Mission = () => {
    return (
        <div className="flex flex-col md:flex-row w-full py-10 gap-5">
            <motion.div className="w-full md:w-1/3 h-full" 
                    initial={{ scale: 0.8, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					viewport={{ margin: "-100px" }}
					transition={{ duration: 0.5 }}>
                <h2 className="uppercase font-semibold text-lg sm:text-xl tracking-wider">Our Mission</h2>
            </motion.div>
            <motion.div className="w-full md:w-2/3 h-full"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                <h3 className="text-3xl sm:text-4xl">
                    To raise awareness, educate, and prepare adventurers for Southern California&apos;s vast and snowy winter backcountry
                </h3>
            </motion.div>
		</div>
    );
};

export default Mission;