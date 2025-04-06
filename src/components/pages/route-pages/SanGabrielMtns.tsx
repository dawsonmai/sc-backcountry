import Header from "@/components/global/Header";
import WorkInProgress from "@/components/routes/routesOverview/WorkInProgress";
const SanGabrielMtns = () => {
    return (
        <div className="flex flex-col px-5">
            <div className="flex flex-col min-h-[calc(100dvh-20px)] pt-5">
				<Header />
				<div className="flex flex-grow">
					<WorkInProgress />
				</div>
			</div>
        </div>
    );
};

export default SanGabrielMtns;