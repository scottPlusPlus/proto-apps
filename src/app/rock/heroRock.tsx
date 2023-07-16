import HeroImage from '@/public/images//rock/rockHero.jpg'
import EmailFormRock from "./emailFormRock";
import { CssPropsCommon } from "@/src/frontCode/cssCommon";

type Props = {
    cssCommon: CssPropsCommon,
    cssSpecific: CssPropsSpecific,
    handleSubmitEmail: (email: string) => void,
    introText: React.ReactNode,
}

type CssPropsSpecific = {
    sectionBg: string,
}

export default function HeroRock(props: Props) {

    const cssTextAlignment = "flex justify-center lg:justify-start";

    return (
        <section>
            <div className={"grid grid-cols-1 lg:grid-cols-2"}>

                {/* Left column */}
                <div className={"flex text-white justify-center " + props.cssSpecific.sectionBg}>
                    <div className="mt-auto mb-auto">
                        <div className="ml-auto mr-auto">
                            <div className="py-16 px-16">
                                <div data-aos="fade-up" data-aos-delay="200">
                                    <div className={cssTextAlignment}>
                                        <h1 className={props.cssCommon.textH1}>Rock Alert 🤘</h1>
                                    </div>
                                    <div className={cssTextAlignment}>
                                        {props.introText}
                                    </div>
                                    <div className={cssTextAlignment + " pt-8"}>
                                        <EmailFormRock onSubmitEmail={props.handleSubmitEmail} cssCommon={props.cssCommon}></EmailFormRock>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right column.. full bleed image */}
                <div className="flex">
                    <div className="min-h-[200px]"> </div>
                    <ImageFill src={HeroImage.src} />
                </div>
            </div>
        </section>

    )
}

function ImageFill(props: { src: string, alt?: string }) {
    return (
        <div
            className="relative w-full h-full "
        >
            <div className="w-200 h-200"></div>
            <img
                src={props.src}
                alt={props.alt ? props.alt : "image"}
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
        </div>
    );
}