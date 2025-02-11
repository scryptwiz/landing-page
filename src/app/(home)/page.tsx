import HeroSection from "@/components/sections/hero-section";
import Section1 from "@/components/sections/section1";
import Section2 from "@/components/sections/section2";
import Section3 from "@/components/sections/section3";
import LogoSection from "@/components/sections/logos-section";
import Section4 from "@/components/sections/section4";
import Section5 from "@/components/sections/section5";
import RequestQuoteForm from "@/components/sections/req-quote-section";
import AppPromoSection from "@/components/sections/promo-section6";

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <Section1/>
            <Section2/>
            <Section3/>
            <LogoSection/>
            <Section4/>
            <Section5/>
            <RequestQuoteForm/>
            <AppPromoSection/>
        </div>
    );
}

export default HomePage;