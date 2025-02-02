import Header from "@/components/global/Header";
import AreaMap from "@/components/routes/routesOverview/AreaMap";
import AreaList from "@/components/routes/routesOverview/AreaList";

const route = () => {
	return (
		<div className="flex flex-col p-5">
			<div className="flex flex-col min-h-[calc(100dvh)] pb-10">
			<Header />
			<div className="flex flex-grow">
				<AreaMap />
			</div>
		</div>
		<AreaList />
		</div>
	);
};

export default route;
