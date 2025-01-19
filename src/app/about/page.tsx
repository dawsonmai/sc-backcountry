import Header from "@/components/global/Header";
import AboutImage from "@/components/about/AboutImage";
import Mission from "@/components/about/Mission";
import DropdownInfo from "@/components/about/DropdownInfo";
const About = () => {
	return (
		<div className="flex flex-col p-5">
			<Header />
            <AboutImage />
            <Mission />
            <DropdownInfo />
		</div>
	);
};

export default About;