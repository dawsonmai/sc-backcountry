import Image from "next/image";
const EducationImage = () => {
    return (
        <div className="relative flex flex-col flex-grow bg-gray-700 w-full rounded-3xl sm:p-10 text-8xl justify-center items-center">
			{/* Background Image */}
			<Image
				src="/research.jpeg"
				alt="Research"
				layout="fill"
				objectFit="cover"
				objectPosition="center"
				className="rounded-3xl"
			/>

			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-black/30 rounded-3xl"></div>

			{/* Text */}
			<h1 className="relative inline text-4xl sm:text-6xl md:text-7xl font-medium text-white hyphens-manual lg:hyphens-none">
				Education
			</h1>
		</div>
    );
};
export default EducationImage;