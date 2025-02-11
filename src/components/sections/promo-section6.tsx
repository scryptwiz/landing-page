import Image from "next/image";
import IMAGES from "@/constants/images";

export default function AppPromoSection() {
    return (
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-12 bg-gray-100">
            {/* Left Section - Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left space-y-4">
                <h5 className="text-p2 font-heading text-subheadingSm">Lorem Ipsum</h5>
                <h2 className="text-subheadingSm font-heading font-bold">Lorem Ipsum Dolor <br /> Sit Amet</h2>
                <p className="text-s1">
                    Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
                    suspendisse convallis. Urna a urna lectus donec felis risus dui
                    pellentesque. Pellentesque ultricies ipsum.
                </p>

                {/* Store Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                    <Image
                        src={IMAGES.LOGOS.GOOGLE_PLAY}
                        alt="Get it on Google Play"
                        width={160}
                        height={48}
                    />
                    <Image
                        src={IMAGES.LOGOS.APPLE_STORE}
                        alt="Download on the App Store"
                        width={160}
                        height={48}
                    />
                </div>
            </div>

            {/* Right Section - Optimized Image */}
            <div className="lg:w-1/2 flex justify-center">
                <Image
                    src={IMAGES.SECTION6_IMAGE}
                    alt="Hand holding phone"
                    width={500}
                    height={500}
                    className="w-full max-w-lg object-contain"
                />
            </div>
        </section>
    );
}
