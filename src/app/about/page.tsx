import Header from "@/components/global/Header";
import AboutImage from "@/components/about/AboutImage";
import Mission from "@/components/about/Mission";
import DropdownInfo from "@/components/about/DropdownInfo";
const About = () => {
	return (
		<div className="flex flex-col p-5 px-5">
			<div className="flex flex-col min-h-[calc(100dvh)] pb-10">
				<Header />
				<div className="flex flex-grow">
					<AboutImage />
				</div>
			</div>
            <Mission />
            <DropdownInfo />
		</div>
	);
};

export default About;