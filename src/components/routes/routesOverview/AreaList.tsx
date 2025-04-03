"use client"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 1.2 },
};


const AreaList = () => {
    return (
        <div>
            <motion.div className="py-6 border-b-2 border-black flex flex-col md:flex-row" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
                <div className="relative bg-gray-700 h-72 w-full md:w-6/12 rounded-2xl shadow-lg shadow-neutral-500 mb-3 md:mb-0">
                    {/* Background Image */}
                    <Image
                        src="/SanGabrielAfar.jpeg"
                        alt="San Gabriel Mountains"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="left"
                        className="rounded-2xl"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-black/0 rounded-2xl"></div>
                </div>
                    <div className="w-full md:px-10 flex flex-col justify-center text-center items-center md:justify-between md:items-start md:text-left">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold mb-2">San Gabriel Mountains</h3>
                        <p className="text-xl lg:text-2xl mb-5">
                        Located just north of Los Angeles, the San Gabriel mountains are perfect for weekend warriors. From gradual snow paths for those looking for a relaxing hike to steep chutes for those looking for a technical climb, these mountains have it all.
                        </p>
                    </div>
                    <Button asChild className="rounded-full w-fit text-black bg-transparent border-2 border-black hover:bg-black hover:text-white text-md md:text-lg" variant="outline">
                        <Link href="/routes/san-gabriel-mountains">Explore</Link>
                    </Button>
                </div>
            </motion.div>
            <motion.div className="py-6 border-b-2 border-black flex flex-col md:flex-row" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
                <div className="relative bg-gray-700 h-72 w-full md:w-6/12 rounded-2xl shadow-lg shadow-neutral-500 mb-3 md:mb-0">
                        {/* Background Image */}
                        <Image
                            src="/SanBernardinoMtns.jpeg"
                            alt="San Bernardino Mountains"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="left"
                            className="rounded-2xl"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-black/0 rounded-2xl"></div>
                    </div>
                    <div className="w-full md:px-10 flex flex-col justify-center text-center items-center md:justify-between md:items-start md:text-left">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold mb-2">San Bernardino Mountains</h3>
                        <p className="text-xl lg:text-2xl mb-5">
                        Home to Southern California&apos;s tallest mountain, Mt. San Gorgonio standing at 11,503 feet, the San Bernardino mountains are great for those looking to reach new heights and ski new lines.
                        </p>
                    </div>
                    <Button asChild className="rounded-full w-fit text-black bg-transparent border-2 border-black hover:bg-black hover:text-white text-md md:text-lg" variant="outline">
                        <Link href="/routes/san-bernardino-mountains">Explore</Link>
                    </Button>
                </div>
            </motion.div>
            <motion.div className="py-6 flex flex-col md:flex-row" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
                <div className="relative bg-gray-700 h-72 w-full md:w-6/12 rounded-2xl shadow-lg shadow-neutral-500 mb-3 md:mb-0">
                    {/* Background Image */}
                    <Image
                        src="/sanjacintosnow.jpeg"
                        alt="San Jacinto Mountains"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="left"
                        className="rounded-2xl"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-black/0 rounded-2xl"></div>
                </div>
                   <div className="w-full md:px-10 flex flex-col justify-center text-center items-center md:justify-between md:items-start md:text-left">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold mb-2">San Jacinto Mountains</h3>
                        <p className="text-xl lg:text-2xl mb-5">
                            Rising high above the Palm Desert, the San Jacinto Mountains offer many types of terrain for skiers and climbers, from gladed tree runs to steep continuous chutes, all of which can be easily accessed from the Aerial Tram.
                        </p>
                    </div>
                    <Button asChild className="rounded-full w-fit text-black bg-transparent border-2 border-black hover:bg-black hover:text-white text-md md:text-lg" variant="outline">
                        <Link href="/routes/san-jacinto-mountains">Explore</Link>
                    </Button>
                </div>
            </motion.div>
        </div>
        
        
    );
};

export default AreaList;