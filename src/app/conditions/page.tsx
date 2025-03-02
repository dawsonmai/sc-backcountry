import Header from "@/components/global/Header";
import ConditionsData from "@/components/conditions/ConditionsData";
import SnowProfile from "@/components/conditions/SnowProfile";
import Footer from "@/components/global/Footer";
const Conditions = () => {
	return (
		<div>
			<div className="flex flex-col p-5">
				<Header />
				<ConditionsData />
				<SnowProfile />
			</div>
			<Footer />
		</div>
	);
};

export default Conditions;
