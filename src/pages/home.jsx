import Hero from "../components/hero";
import HowOperate from "../components/howOperate";
import HowOperateCards from "../../public/Data/howOperate_Cards";

export default function Home() {
    return (
        <>
            <Hero />
            <HowOperate items = {HowOperateCards}/>
        </>
    );
}
