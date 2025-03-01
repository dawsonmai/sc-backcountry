"use client";
import Header from "../components/global/Header";
import IntroImage from "@/components/home/IntroImage";
import AreaData from "@/components/home/AreaData";
import ExploreArea from "@/components/home/ExploreArea";
import ConditionsPreview from "@/components/home/ConditionsPreview";
import Footer from "@/components/global/Footer";
import { motion } from "framer-motion";

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
};

export default function Home() {
	return (
		<div>
			<div className="flex flex-col px-5 pb-5">
				<motion.div className="flex flex-col min-h-[calc(100dvh)] py-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
					<Header />
					<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-grow">
						<IntroImage />
					</motion.div>
				</motion.div>

				<motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
					<AreaData />
				</motion.div>

				<motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
					<ExploreArea />
				</motion.div>

				<motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
					<div className="pb-5">
						<ConditionsPreview />
					</div>
				</motion.div>
			</div>
			<Footer />
		</div>
	);
}
