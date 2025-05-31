import Header from "@/components/global/Header";
import SanGabrielImage from "@/components/routes/SanGabrielMtns/SanGabrielImage"
import SanGabrielRouteList from "@/components/routes/SanGabrielMtns/SanGabrielRouteList";
const SanGabrielMtns = () => {
    return (
        <div className="flex flex-col p-5">
            <div className="flex flex-col min-h-[calc(100dvh-20px)] pb-5">
				<Header />
				<div className="flex flex-grow">
					<SanGabrielImage />
				</div>
			</div>
            <SanGabrielRouteList />
        </div>
    );
};

export default SanGabrielMtns;