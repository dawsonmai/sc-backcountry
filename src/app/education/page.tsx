"use client"
import EducationImage from "@/components/education/EducationImage";
import Header from "@/components/global/Header";
import ArticleList from "@/components/education/ArticleList";
import { motion } from "framer-motion";

const education = () => {
	return (
		<div className="flex flex-col p-5">
			<motion.div className="flex flex-col min-h-[calc(100dvh)] pb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
				<Header />
				<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-grow">
					<EducationImage />
				</motion.div>
			</motion.div>
			<ArticleList />
		</div>
	);
};

export default education;
