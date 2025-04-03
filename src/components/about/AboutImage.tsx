import Image from "next/image";
const AboutImage = () => {
    return (
        <div className="relative flex flex-col flex-grow w-full rounded-3xl sm:p-10 text-8xl justify-center items-center">
			{/* Background Image */}
			<Image 
				src="/climbersPrepare.jpeg" 
				alt="Climbers Preparing"
				layout="fill" 
				objectFit="cover"
				objectPosition="center"
				className="rounded-3xl"
			/>
			
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/30 rounded-3xl"></div>

			{/* Text */}
			<h1 className="relative text-4xl sm:text-6xl md:text-7xl font-medium text-white hyphens-manual lg:hyphens-none">
				About Us
			</h1>
		</div>
    );
};
export default AboutImage;