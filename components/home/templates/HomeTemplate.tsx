import HomeBanner from "@/components/home/HomeBanner";
import HomeCard from "@/components/home/HomeCard";
import PopularProductList from "@/components/home/PopularProductList";
import News from "@/components/home/News";
import Opinions from "@/components/home/Opinions";

export default function HomeTemplate() {

    return (
        <>
            <HomeBanner/>
            <HomeCard/>
            <div>
                <PopularProductList productNumber={8}/>
            </div>
            <News/>
            <Opinions/>
            <div>
                <PopularProductList productNumber={4}/>
            </div>
        </>
    )
}