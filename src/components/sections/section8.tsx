import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/sub-comp/logo";

export default function Section8() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-16 px-4 md:px-8 lg:px-16">
            <Logo/>

            <h1 className="text-subheadingLg font-bold text-s1 max-w-2xl mt-5">
                LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DUI.
            </h1>

            <p className="text-s1 text-base md:text-lg max-w-2xl mt-4">
                Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
            </p>

            <Button className="mt-6 px-6 py-3 text-white bg-p1 hover:bg-p1/90 transition-all flex items-center gap-2">
                Loerum Ipsum <ArrowRight size={18} />
            </Button>
        </section>
    );
}
