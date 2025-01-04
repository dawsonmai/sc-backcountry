import Header from "@/components/global/Header";
import ConditionsSanGabriel from "@/components/conditions/ConditionsSanGabriel";
import SnowProfile from "@/components/conditions/SnowProfile";
const Conditions = () => {
	return (
		<div className="flex flex-col p-5">
			<Header />
			<ConditionsSanGabriel />
			<SnowProfile />
		</div>
	);
};

export default Conditions;
