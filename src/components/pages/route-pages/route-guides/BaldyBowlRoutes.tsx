import BaldyBowl from "@/components/routes/RouteGuides/BaldyBowl";
import Header from "@/components/global/Header";
import Footer2 from "@/components/global/Footer2";
const BaldyBowlRoutes = () => {
    return(
        <div>
            <div className="flex flex-col p-5">
                <Header />
                <BaldyBowl />
            </div>
            <Footer2 />
        </div>
    )
}

export default BaldyBowlRoutes;