import Header from "@/components/global/Header";
import ConditionsData from "@/components/conditions/ConditionsData";
import SnowProfile from "@/components/conditions/SnowProfile";
import Footer2 from "@/components/global/Footer2";
const Conditions = () => {
	return (
		<div>
			<div className="flex flex-col p-5">
				<Header />
				<ConditionsData />
				<SnowProfile />
			</div>
			<Footer2 />
		</div>
	);
};

export default Conditions;
