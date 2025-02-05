import Header from "@/components/global/Header";
import WorkInProgress from "@/components/routes/routesOverview/WorkInProgress";
const sangabriel = () => {
    return (
        <div className="flex flex-col p-5">
            <div className="flex flex-col min-h-[calc(100dvh)] pb-10">
				<Header />
				<div className="flex flex-grow">
					<WorkInProgress />
				</div>
			</div>
        </div>
    );
};

export default sangabriel;