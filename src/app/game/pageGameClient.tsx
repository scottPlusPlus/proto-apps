"use client"

import FloatingFooter from "@/src/agnostic/components/FloatingFooter"
import { ButtonProps, CssPropsCommon } from "@/src/frontCode/cssCommon"

import ScrollTextComponent from "@/src/agnostic/components/ScrollTextComponent"
import { CenterMaxWidth } from "@/src/agnostic/components/CenterMaxWidth"
import LayoutImageRightOrBtm from "@/src/agnostic/components/LayoutImageRightOrBtm"
import ImgGameHero from "@/public/images/game/game-hero-1280.png"
import ImgGameHero2 from "@/public/images/game/game-hero-2-1280.png"
import FadeUp from "@/src/agnostic/components/FadeUp"
import EmailFormGame from "./emailFormGame"
import { Signal } from "@/src/agnostic/utils/Signal"
import NamedObserver from "@/src/agnostic/components/NamedObserver"
import { pointsArrayToPathString } from "@/src/agnostic/utils/svgUtils"
import { urlWithRef, submitAnalytics, submitEmail } from "@/src/frontCode/dataUtils"
import { useEffect } from "react"
import ParticleButton from "./ParticleButton"
import css from "styled-jsx/css"


type Props = {
}

const cssCommon = {
    padding: "p-8",
    actionButton: gameActionButton,
    textH1: "text-6xl font-bold mb-4",
    textH2: "text-2xl font-bold mb-4",
    textH3: "text-l",
    textBase: "text-xl whitespace-pre-wrap",
    textBaseBig: "text-xl whitespace-pre-wrap",
    textLink: "text-orange-500 hover:text-green-500 cursor-pointer",
    bgDark: "bg-gradient-to-r from-stone-900 via-pink-900 to-stone-900",
    bgDark2: "bg-stone-700",  //"bg-gradient-to-b from-stone-800 to-stone-900",
    bgDark3: "bg-stone-500",
    textDark: "text-slate-800",
}

function gameActionButton(props: ButtonProps) {

    function handleClick() {
        props.handle();
    }

    const pointsArray1: [number, number][] = [
        [0, 0],
        [300, 0],
        [300, 25],
        [275, 25],
        [275, 50],
        [300, 50],
        [300, 75],
        [325, 75],
        [325, 100],
        [0, 100],
    ];
    const pointsArray2: [number, number][] = [
        [325, 25],
        [350, 25],
        [350, 50],
        [325, 50],
    ];
    pointsArray1.forEach(point => {
        if (point[0] > 0) {
            //point[0] -= 100;
        }
    });
    pointsArray2.forEach(point => {
        if (point[0] > 0) {
            //point[0] -= 100;
        }
    });


    const points = pointsArrayToPathString(pointsArray1);
    const points2 = pointsArrayToPathString(pointsArray2);

    const shapePath = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100"%3E%3Cpath d="${points} ${points2}" fill="orange" /%3E%3C/svg%3E`;

    return (
        <ParticleButton />
    )

    return (
        <button
            type="submit"
            className="p-4 text-white text-xl font-bold"
            style={{
                background: `url('${shapePath}')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left",
                backgroundSize: "100% 100%",
                transition: "background-color 0.3s ease",
            }}
            disabled={props.disabled}
            onClick={handleClick}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = `url('${shapePath.replace('orange', 'green')}')`;
                e.currentTarget.style.backgroundRepeat = 'no-repeat';
                e.currentTarget.style.backgroundPosition = 'left';
                e.currentTarget.style.backgroundSize = "100% 100%";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = `url('${shapePath}')`;
                e.currentTarget.style.backgroundRepeat = 'no-repeat';
                e.currentTarget.style.backgroundPosition = 'left';
                e.currentTarget.style.backgroundSize = "100% 100%";
            }}
        >
            {props.children}
        </button>
    );

    // return (
    //     <span className="flex">
    //     <button
    //     type="submit"
    //     className="relative btn-sm inline-flex items-center text-slate-100 bg-orange-500 hover:bg-green-500  shadow-sm text-xl rounded-none group"
    //     disabled={props.disabled}
    //     onClick={handleClick}
    //   >
    //     {props.children}
    //   </button>
    //     <div>
    //     <span className="-py-2  w-12 grid grid-cols-2">
    //             <span className="h-6 w-6 bg-green-500 block"></span>
    //             <span className="h-6 w-6 bg-white block "></span>
    //             <span className="h-6 w-6 bg-white block "></span>
    //             <span className="h-6 w-6 bg-green-500 block"></span>
    //             </span> 
    //     </div>
    //    </span>
    // )
}


export function PageGameClient(props: Props) {

    const thanksPopupSignal = new Signal();

    var anaData = "";
    useEffect(() => {
        anaData = urlWithRef(document);
        submitAnalytics("rock-visit-top", anaData, "game",);
    }, []);

    function handleSubmitEmail(email: string): void {
        submitEmail(email, anaData, "game");
        thanksPopupSignal.trigger();
    }

    function handleAnaObserver(name: string) {
        submitAnalytics(name, anaData, "game");
    }





    const bgNeutral = "bg-neutral-200";
    // const cssTextAlignment = "flex justify-center lg:justify-start";
    const cssTextAlignment = "flex justify-start";

    function GoButton() {
        return (
            <div>
                <EmailFormGame onSubmitEmail={handleSubmitEmail} cssCommon={cssCommon}></EmailFormGame>
            </div>
        )
    }

    function sectionHero() {
        return (
            <LayoutImageRightOrBtm imageSrc={ImgGameHero.src} imageAlt="flock of tweeting birds">
                <div className={"flex text-white justify-center " + cssCommon.bgDark}>
                    <div className="mt-auto mb-auto">
                        <div className="ml-auto mr-auto">
                            <div className="py-16 px-16">

                                <div className={cssTextAlignment}>
                                    <h1 className="h1 text-white mb-6">
                                        the NEXT LEVEL of Gamedev Community
                                    </h1>
                                </div>
                                <div className={`${cssTextAlignment} ${cssCommon.textBaseBig}`}>
                                    the best place for indie creators to connect with gamers and each other
                                </div>
                                <div className={cssTextAlignment + " pt-8"}>
                                    {GoButton()}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </LayoutImageRightOrBtm>
        )
    }

    function featureList() {
        return (
            <FadeUp>
                <p className={`${cssCommon.textH2} text-white`}>Features</p>
                <ul className={"list-disc whitespace-pre-wrap " + cssCommon.textBase + " text-white"}>
                    {/* <ul className="space-y-2"> */}
                    <li>Free shareable page to post updates about your game</li>
                    <li>Post everything from your elevator pitch, concept art, to playable demos</li>
                    <li>Searchable portfolios of indie devs looking to collaborate</li>
                    <li>Players earn rewards for giving useful feedback about your game</li>
                </ul>
            </FadeUp>
        )
    }

    function sectionFeatures() {
        return (
            <LayoutImageRightOrBtm imageSrc={ImgGameHero2.src} imageAlt="flock of tweeting birds">
                <div className={"flex text-white justify-center " + cssCommon.bgDark3}>
                    <div className="mt-auto mb-auto">
                        <div className="ml-auto mr-auto">
                            <div className="py-16 px-16">
                                {featureList()}
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutImageRightOrBtm>
        )
    }

    function sectionFaq() {
        return (
            <div className={cssCommon.bgDark2 + " text-white"}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 ">
                    <div className="pb-12 md:pb-20">
                        {/* Section header */}
                        <div className="pb-12" data-aos="fade-up" data-aos-delay="200">
                            <h2 className="h2">FAQs</h2>
                        </div>

                        {/* Columns */}
                        <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
                            {/* Column */}
                            <div className="w-full md:w-1/2 space-y-8">
                                {/* Item */}
                                <FaqCard title="What is This?">
                                    <>
                                        BirdSong is a third-party tool helping you be more effective and efficient connecting with people on Twitter.
                                        Connect your Twitter Lists, and our AI will find the tweets most worth your response.
                                        You can configure to send you a daily email with the most important tweets, or just visit our page to see your currently highlighted Tweets.
                                    </>
                                </FaqCard>

                                {/* Item */}
                                <FaqCard title="What Types of Tweets do you Highlight?">
                                    <>
                                        We specifically look for tweets that invite a response, or are talking about topics you can configure.
                                        We've learned the best way to build community is to engage with conversations that are already happening, and Bird Song helps you find those conversations.
                                    </>
                                </FaqCard>

                                {/* Item */}
                                <FaqCard title="What about Mastadon?  Threads?">
                                    <>
                                        We're focused now on delivering a delightful experience on Twitter, but are definitely looking to grow to other platforms.
                                    </>
                                </FaqCard>
                            </div>

                            {/* Column */}
                            <div className="w-full md:w-1/2 space-y-8">
                                {/* Item */}
                                <FaqCard title="Why Do You Need My Email?">
                                    <>
                                        Joining the Waitlist ensures you are notified as soon as we launch.
                                        We will only email you to let you know that BirdSong is ready.
                                        We will not sell or share your information with anyone else, or use it for any other purpose.
                                    </>
                                </FaqCard>

                                {/* Item */}
                                <FaqCard title="I have more questions!">
                                    <>
                                        Please <a className="text-blue-500 cursor-pointer" href="https://twitter.com/ScottPlusPlus">get in touch</a>, we'd love to discuss.
                                    </>
                                </FaqCard>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <section>
                {sectionHero()}
            </section>

            <section>
                <div className={`py-8 pb-12 ${cssCommon.bgDark2}`}>
                    <CenterMaxWidth minXPad={8}>
                        <FadeUp>
                            <p className={`${cssCommon.textH2} text-white`}>
                                You bring your passion and talent to the anvil of creation. You weave art, code, music, and blood to build new worlds where we can play, explore, and experience things we’ve never imagined before.
                                <b><ScrollTextComponent text=" You do enough.  Let us help make connecting players to your game a few bits easier" bufferTop={-400} bufferBottom={-250} colorBefore="text-white" colorAfter="text-pink-500"></ScrollTextComponent></b>.
                            </p>
                        </FadeUp>
                    </CenterMaxWidth>
                </div>
            </section>

            <section>
                {sectionFeatures()}
            </section>


            <NamedObserver name='bird-visit-faq' onObserve={handleAnaObserver} />
            <section>
                {sectionFaq()}
            </section>
            <div className='py-8'></div>
            <FloatingFooter showBelowPageYOffset={400} cssOverride={cssCommon.bgDark} >
                <div className="w-full p-4 flex justify-center">
                    <div className="max-w-xs">
                        {GoButton()}
                    </div>
                </div>
            </FloatingFooter>
            {/* <Cta /> */}
        </>
    )
}

function FaqCard(props: { title: string, children: React.ReactNode }) {
    return (
        <FadeUp>
            <div className="space-y-2">
                <h4 className="text-xl font-bold">{props.title}</h4>
                <p className="text-slate-500">{props.children}</p>
            </div>
        </FadeUp>
    )
}