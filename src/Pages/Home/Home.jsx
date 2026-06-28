
import Banner from "../../Components/HomeComponents/Banner/Banner";
import Features from "../../Components/HomeComponents/Features/Features";
import MarketOverview from "../../Components/HomeComponents/MarketOverview/MarketOverview";
import PromoBanner from "../../Components/HomeComponents/PromoBanner/PromoBanner";

const Home = () => {
    return(
        <>
            <Banner />
            <Features />
            <MarketOverview></MarketOverview>
            <PromoBanner></PromoBanner>
        </>
    )
}

export default Home;