import { CssPropsCommon } from "@/src/frontCode/cssCommon"

type AltColumnProps = {
    imageLeft: boolean,
    image: React.ReactElement,
    title: string,
    txt: string,
    css: CssPropsCommon
}

export default function AltColumn(props: AltColumnProps) {

    function contentImg() {
        return props.image;
    }

    function contentTxt() {
        return (
            <div className="text-left mt-8">
                <p className={props.css.textH2}>{props.title}</p>
                <p className={props.css.textBase}>{props.txt}</p>
            </div>
        )
    }

    function contentLeft() {
        if (props.imageLeft) {
            return (
                <div className="flex justify-center lg:justify-right order-last lg:order-first w-full lg:w-1/2">
                    <div className="mx-auto">
                        {contentImg()}
                    </div>
                </div>
            )
        }
        return (
            <div className="flex justify-center lg:justify-right lg:w-1/2">
                <div className="mx-auto">
                    {contentTxt()}
                </div>
            </div>
        )
    }

    function contentRight() {
        if (props.imageLeft) {
            return (
                <div className="flex justify-center lg:justify-left lg:w-1/2 order-first lg:order-last">
                     <div className="mx-auto">
                        {contentTxt()}
                    </div>
                </div>
            )
        }
        return (
            <div className="flex justify-center lg:justify-left lg:w-1/2">
                <div className="mx-auto">
                    {contentImg()}
                </div>
            </div>
        )
    }


    return (
        <div data-aos="fade-up">
            <div className="flex justify-center">
                <div className="flex py-8 px-8 max-w-4xl ">
                    <div className="flex flex-col lg:flex-row ">
                        {contentLeft()}
                        {contentRight()}
                    </div>
                </div>
            </div>
        </div>
    )
}