import Header from "@/components/global/Header";
import AreaMap from "@/components/routes/routesOverview/AreaMap";
import AreaList from "@/components/routes/routesOverview/AreaList";

const route = () => {
	return (
		<div className="flex flex-col p-5">
			<Header />
			<AreaMap />
			<AreaList />
		</div>
	);
};

export default route;
