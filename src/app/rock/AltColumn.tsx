type AltColumnProps = {
    leftContent:React.ReactElement,
    rightContent:React.ReactElement,
    rightOnTop?: boolean
}

export default function AltColumn(props: AltColumnProps) {

    function contentLeft() {
        const switchOrder = props.rightOnTop ? "order-last lg:order-first" : "";
        return (
            <div className={"flex justify-center lg:justify-right w-full lg:w-1/2 " + switchOrder}>
                <div className="mx-auto">
                {props.leftContent}
                </div>
            </div>
        );
    }

    function contentRight() {
        const switchOrder = props.rightOnTop ? "order-first lg:order-last" : "";
        return (
            <div className={"flex justify-center lg:justify-left w-full lg:w-1/2 " + switchOrder}>
                <div className="mx-auto">
                {props.rightContent}
                </div>
            </div>
        );
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