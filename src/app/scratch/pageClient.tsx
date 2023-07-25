"use client"

import FloatingFooter from "@/src/agnostic/components/FloatingFooter"
import { CssPropsCommon } from "@/src/frontCode/cssCommon"
import Link from 'next/link';
import { BirdActionButton } from "../bird/BirdActionButton"
import ArrowWithHover from "@/src/agnostic/components/ArrowWithHover"
import ScrollTextComponent from "@/src/agnostic/components/ScrollTextComponent"
import { CenterMaxWidth } from "@/src/agnostic/components/CenterMaxWidth"
import LayoutImageRightOrBtm from "@/src/agnostic/components/LayoutImageRightOrBtm"
import ImgBirdHero from "@/public/images/bird/twitter_hero2.png"
import FadeUp from "@/src/agnostic/components/FadeUp"


type Props = {
    cssCommon: CssPropsCommon
}

export function PageClient(props: Props) {

    var anaData = "";
    useEffect(() => {
        anaData = urlWithRef(document);
        submitAnalytics("bird-visit-top", anaData, "bird");
    }, []);

    function handleAnaObserver(name:string){
        submitAnalytics(name, anaData, "bird");
    }





    const bgNeutral = "bg-neutral-200";
    // const cssTextAlignment = "flex justify-center lg:justify-start";
    const cssTextAlignment = "flex justify-start";

    function GoButton() {
        return (
            <div>
                <Link href="./bird/thanks">
                    <BirdActionButton handle={() => { }} disabled={false}>$50 / Month. Let's Go! <ArrowWithHover /></BirdActionButton>
                </Link>
                <p className={props.cssCommon.textBase}>* $10 with your own <a className={props.cssCommon.textLink} href="https://developer.twitter.com/en/portal/products/basic" target="_blank">Twitter Api Token</a></p>
            </div>
        )
    }

    function sectionHero() {
        return (
            <LayoutImageRightOrBtm imageSrc={ImgBirdHero.src} imageAlt="flock of tweeting birds">
                <div className={"flex text-white justify-center " + props.cssCommon.bgDark}>
                    <div className="mt-auto mb-auto">
                        <div className="ml-auto mr-auto">
                            <div className="py-16 px-16">

                                <div className={cssTextAlignment}>
                                    <h1 className="h1 text-white mb-6">
                                        Skip the Chatter<br></br>Build Real <span className='text-amber-400'>Community</span> on Twitter
                                    </h1>
                                </div>
                                <div className={`${cssTextAlignment} ${props.cssCommon.textBaseBig}`}>
                                    Your AI assistant highlights the tweets most worth your response to help you have an actual conversation.
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

    function sectionFaq() {
        return (
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4">
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
        );
    }

    return (
        <>
            <section>
                {sectionHero()}
            </section>

            <section>
                <div className={`py-8 bg-white-100`}>
                    <CenterMaxWidth minXPad={8}>
                        <FadeUp>
                            <p className={props.cssCommon.textH2 + " " + props.cssCommon.textDark}>
                                It doesn't matter how eloquent your tweets are if you have no followers.
                                The <b><ScrollTextComponent text="best way to build that community is to engage with conversations that are already happening" bufferTop={-100} bufferBottom={-100} colorBefore="text-black" colorAfter="text-yellow-500"></ScrollTextComponent></b>.
                                But it can be so hard to find those opportunities amongst all the noise.  That's where we can help.  We built this tool because we needed it.  We think it can help you too.
                            </p>
                        </FadeUp>
                    </CenterMaxWidth>
                </div>
            </section>

            <section>
                <div className="py-8">
                    <SectionFeatures cssCommon={props.cssCommon} />
                </div>
            </section>



            <section>
                <div className={`py-16 bg-white-100`}>
                    <CenterMaxWidth minXPad={8}>
                        <div className="px-32">
                            <p className={props.cssCommon.textH2 + " " + props.cssCommon.textDark}>
                                lol I spent way too much time on this, and now I'm spending even MORE showing it off but:
                                <b><ScrollTextComponent text=" the text highlights as you scroll down!  So cool!  Simple React component you can just drop in" bufferTop={-400} bufferBottom={-200} colorBefore="text-black" colorAfter="text-blue-500"></ScrollTextComponent></b>.
                                Brings a little more life to your landing page.
                            </p>
                        </div>
                    </CenterMaxWidth>
                </div>
            </section>

            <section>
                <div className={`py-16 ${bgNeutral}`}>
                    <CenterMaxWidth minXPad={8}>
                        <div className="px-32">
                            <p className={props.cssCommon.textH2 + " " + props.cssCommon.textDark}>
                                lol I spent way too much time on this, and now I'm spending even MORE showing it off but:
                                <b><ScrollTextComponent text=" the text highlights as you scroll down!  So cool!  Simple React component you can just drop in" bufferTop={-400} bufferBottom={-200} colorBefore="text-black" colorAfter="text-green-500"></ScrollTextComponent></b>.
                                Brings a little more life to your landing page.
                            </p>
                        </div>
                    </CenterMaxWidth>
                </div>
            </section>

            <section>
                <div className={`py-16 bg-white-100`}>
                    <CenterMaxWidth minXPad={8}>
                        <div className="px-32">
                            <p className={props.cssCommon.textH2 + " " + props.cssCommon.textDark}>
                                lol I spent way too much time on this, and now I'm spending even MORE showing it off but:
                                <b><ScrollTextComponent text=" the text highlights as you scroll down!  So cool!  Simple React component you can just drop in" bufferTop={-400} bufferBottom={-200} colorBefore="text-black" colorAfter="text-purple-500"></ScrollTextComponent></b>.
                                Brings a little more life to your landing page.
                            </p>
                        </div>
                    </CenterMaxWidth>
                </div>
            </section>



            <NamedObserver name='bird-visit-faq' onObserve={handleAnaObserver}/>
            <section>
                {sectionFaq()}
            </section>
            <div className='py-8'></div>
            <FloatingFooter showBelowPageYOffset={400} cssOverride={props.cssCommon.bgDark} >
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

import CardWithIcon from "@/components/cardWithIcon"
import BirdIcon1 from '@/public/images/icon_bird_1.png'
import BirdIcon2 from '@/public/images/icon_bird_2.png'
import BirdIcon3 from '@/public/images/icon_bird_3.png'
import { submitAnalytics, urlWithRef } from "@/src/frontCode/dataUtils";
import { useEffect } from "react";
import NamedObserver from "@/src/agnostic/components/NamedObserver";

export default function SectionFeatures(props: Props) {

    const textCss = `${props.cssCommon.textBaseBig} ${props.cssCommon.textDark}`;
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pb-12">
                {/* <div className="w-full md:w-2/3 pt-20 lg:pt-12 text-slate-500 pb-12">It doesn't matter how eloquent your tweets are if you have no followers.  The <b>best way to build that community is to engage with conversations that are already happening</b>.  But it can be so hard to find those opportunities amongst all the noise.  That's where we can help.  We built this tool because we needed it.  We think it can help you too.</div> */}
                {/* Items */}
                <div className="max-w-sm mx-auto grid gap-12 md:grid-cols-3 md:-mx-9 md:gap-0 items-start md:max-w-none">

                    <CardWithIcon
                        iconSrc={BirdIcon1.src}
                        title="Find Community"
                        textCss={textCss}
                        body="Our AI-powered tool scans your feed and finds tweets that invite a response.  Someone asking for advice or an opinion.  Someone being authentic.  We push all that self promo and humble bragging down to the bottom." />

                    <CardWithIcon
                        iconSrc={BirdIcon2.src}
                        title="Find Insights"
                        textCss={textCss}
                        body="At a glance, see what hashtags, topics, and keywords the people you care about are tweeting" />

                    <CardWithIcon
                        iconSrc={BirdIcon3.src}
                        title="Value Your Time"
                        textCss={textCss}
                        body="Add topics, keywords, and lists you especially want to pay attention to.  Choose your notification frequency, or use it on-demand." />
                </div>
            </div>
        </div>
    )
}