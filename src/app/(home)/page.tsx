import HeroSection from "@/components/sections/hero-section";
import Section1 from "@/components/sections/section1";
import Section2 from "@/components/sections/section2";
import Section3 from "@/components/sections/section3";
import LogoSection from "@/components/sections/logos-section";
import Section4 from "@/components/sections/section4";
import Section5 from "@/components/sections/section5";
import RequestQuoteForm from "@/components/sections/req-quote-section";
import AppPromoSection from "@/components/sections/promo-section6";
import Footer from "@/components/sections/footer";
import Navbar from "@/components/sections/navbar";
import Section7 from "@/components/sections/section7";
import Faq from "@/components/sections/faq";
import Section8 from "@/components/sections/section8";
import FeatureSection from "@/components/sections/feature-section";
import OnRoadSection from "@/components/sections/on-road-section";
import LandingCarouselSection from "@/components/sections/landing-carousel-section";
import TestimonialsSection from "@/components/sections/testimonials-section";

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <div className="bg_main_section">
                <Section1/>
                <Section2/>
            </div>
            <Section3/>
            <LogoSection/>
            <Section4/>
            <Section5/>
            <RequestQuoteForm/>
            <AppPromoSection/>
            <div className="bg_main_section2 py-40">
                <Section7/>
                <OnRoadSection/>
            </div>
            <TestimonialsSection/>
            <FeatureSection/>
            <LandingCarouselSection/>
            <Faq/>
            <Section8/>
            <Footer/>
        </div>
    );
}

export default HomePage;