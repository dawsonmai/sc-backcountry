"use client";
import Header from "@/components/global/Header";
import AreaMap from "@/components/routes/routesOverview/AreaMap";
import AreaList from "@/components/routes/routesOverview/AreaList";
import Footer from "@/components/global/Footer";
import { motion } from "framer-motion";

const route = () => {
	return (
		<div>
			<div className="flex flex-col p-5">
				<motion.div className="flex flex-col min-h-[calc(100dvh)] pb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
				<Header />
				<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-grow">
					<AreaMap />
				</motion.div>
			</motion.div>
			<AreaList />
			</div>
		<Footer />
		</div>
	);
};

export default route;
