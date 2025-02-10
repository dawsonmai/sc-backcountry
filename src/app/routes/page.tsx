"use client";
import Header from "@/components/global/Header";
import AreaMap from "@/components/routes/routesOverview/AreaMap";
import AreaList from "@/components/routes/routesOverview/AreaList";
import { motion } from "framer-motion";

const route = () => {
	return (
		<div className="flex flex-col p-5">
			<motion.div className="flex flex-col min-h-[calc(100dvh)] pb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
			<Header />
			<div className="flex flex-grow">
				<AreaMap />
			</div>
		</motion.div>
		<AreaList />
		</div>
	);
};

export default route;
