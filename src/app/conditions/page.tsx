import Header from "@/components/global/Header";
import ConditionsData from "@/components/conditions/ConditionsData";
import SnowProfile from "@/components/conditions/SnowProfile";
const Conditions = () => {
	return (
		<div className="flex flex-col p-5">
			<Header />
			<ConditionsData />
			<SnowProfile />
		</div>
	);
};

export default Conditions;
