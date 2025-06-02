"use client";
import Header from "@/components/global/Header";
import SanBernardinoImage from "@/components/routes/SanBernardinoMtns/SanBernardinoImage";
import SanBernardinoRouteList from "@/components/routes/SanBernardinoMtns/SanBernardinoRouteList";
import Footer2 from "@/components/global/Footer2";
import { motion } from "framer-motion";
const SanBernardinoMtns = () => {
    return (
        <div>
            <div className="flex flex-col p-5">
                <motion.div className="flex flex-col min-h-[calc(100dvh)] pb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                    <Header />
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-grow">
                        <SanBernardinoImage />
                    </motion.div>
                </motion.div>
                <SanBernardinoRouteList />
            </div>
            <Footer2 />
        </div>
    );
};

export default SanBernardinoMtns;