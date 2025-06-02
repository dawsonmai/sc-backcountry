import Image from "next/image";
const SanJacintoImage = () => {
    return (
        <div className="relative flex flex-col flex-grow w-full rounded-3xl sm:p-10 text-8xl justify-center items-center">
            {/* Background Image */}
            <Image 
                src="/SanGabriel1.jpeg" 
                alt="Mt. Baldy Sunrise"
                layout="fill" 
                objectFit="cover"
                objectPosition="center"
                className="rounded-3xl"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/25 rounded-3xl"></div>

            {/* Text */}
            <h1 className="relative text-4xl sm:text-6xl md:text-7xl font-medium text-white hyphens-manual lg:hyphens-none">
                San Jacinto Mountains
            </h1>
        </div>
    );
};

export default SanJacintoImage;