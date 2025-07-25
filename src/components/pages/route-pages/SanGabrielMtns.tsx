"use client";
import Header from "@/components/global/Header";
import SanGabrielImage from "@/components/routes/SanGabrielMtns/SanGabrielImage"
import SanGabrielRouteList from "@/components/routes/SanGabrielMtns/SanGabrielRouteList";
import Footer2 from "@/components/global/Footer2";
import { motion } from "framer-motion";
const SanGabrielMtns = () => {
    return (
        <div>
            <div className="flex flex-col p-5">
                <motion.div className="flex flex-col min-h-[calc(100dvh)] pb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                    <Header />
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-grow">
                        <SanGabrielImage />
                    </motion.div>
                </motion.div>
                <SanGabrielRouteList />
            </div>
            <Footer2 />
        </div>
    );
};

export default SanGabrielMtns;