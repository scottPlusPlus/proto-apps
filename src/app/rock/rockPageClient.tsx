"use client"

import AnalyticObserver from '@/src/components/ClientAnalyticObserver'
import FloatingFooter from '@/src/agnostic/components/FloatingFooter'
import ClientSubmitEmailForm from '@/src/components/ClientSubmitEmailForm'
import HeroRock from './heroRock'
import { ButtonProps } from '@/src/frontCode/cssCommon'
import AltColumn from './AltColumn'
import { submitAnalytics, submitEmail } from "@/frontCode/dataUtils";
import ImgScott from '@/public/images/rock/scott_photo.jpg';
import FeatureImageBW from '@/public/images/rock/fi_control.png';
import FeatureImageCoffee from '@/public/images/rock/fi_coffee.png';
import FeatureImageBell from '@/public/images/rock/fi_bell.png';
import QuoteBox from '@/src/agnostic/components/QuoteBox'
import CircleImage from '@/src/agnostic/components/CircleImage'
import EmailFormRock from './emailFormRock'
import { ThanksPopup } from '@/src/agnostic/components/ThanksPopup'
import { Signal } from '@/src/agnostic/utils/Signal'
import { CenterMaxWidth } from '@/src/agnostic/components/CenterMaxWidth'
import { Layout2ColMinLeft } from '@/src/agnostic/components/Layout2ColMinLeft'
import FaqRock from './FaqRock'
import CheckMarkSVG from '@/src/agnostic/components/CheckMarkSVG'


const cssCommon = {
    padding: "p-8",
    actionButton: actionButtonWithArrow,
    textH1: "text-6xl font-bold mb-4",
    textH2: "text-2xl font-bold mb-4",
    textH3: "text-l",
    textBase: "text-xl whitespace-pre-wrap space-y-4",
    textBaseBig: "text-xl whitespace-pre-wrap",
    textLink: "text-orange-500 hover:text-green-500 cursor-pointer",
}

export default function RockPageClient() {

    const thanksPopupSignal = new Signal();

    function handleSubmitEmail(email: string): void {
        console.log("pageClient:  handle submitEmail");
        var ref = "ref=" + document.referrer;
        submitEmail(email, ref);
        thanksPopupSignal.trigger();
    }

    const bgDark = "bg-gray-800";
    const bgDark2 = "bg-zinc-800";
    const bgNeutral = "bg-neutral-200";

    const cssHeroSection = {
        sectionBg: `bg-gradient-to-r from-zinc-800 to-gray-800`,
    }

    return (
        <>

            <HeroRock cssCommon={cssCommon} cssSpecific={cssHeroSection} handleSubmitEmail={handleSubmitEmail}
                introText={(
                    <p className={cssCommon.textBaseBig}>Be the first to hear when your favorite bands rock your town.  Just choose which artists you care about and how loud you want us to be.  We'll handle the rest.</p>
                )}
            />
            <ThanksPopup openSignal={thanksPopupSignal}></ThanksPopup>
            <section>
                <div className={bgNeutral}>
                    <CenterMaxWidth minXPad={8}>
                        <div className='py-8'>
                            {quoteBox()}
                        </div>

                    </CenterMaxWidth>
                </div>
            </section>

            <section>
                <AltColumn
                    rightOnTop={true}
                    leftContent={(<img src={FeatureImageBell.src} alt="ui preview" width="420" height="420"></img>)}
                    rightContent={(
                        <div className="text-left mt-16">
                            <p className={cssCommon.textH2}>Never Miss a Show</p>
                            <p className={cssCommon.textBase}>Get notified when your favorite bands are playing near YOU.  Simple to use, choose the bands you love, set notification frequency, and stay in the loop. Optionally connect with streaming services to follow your favorites effortlessly.</p>
                        </div>)}
                />
                <AltColumn
                    leftContent={(
                        <div className="text-left mt-16">
                            <p className={cssCommon.textH2}>The Set List</p>
                            <ul className={"space-y-2 list-disc whitespace-pre-wrap " + cssCommon.textBase}>
                            {/* <ul className="space-y-2"> */}
                                <li><OrangeCheck/>Any artist?  Even without a record deal?  Check!</li>
                                <li><OrangeCheck/>Music festivals?   Check!</li>
                                <li><OrangeCheck/>Comedians too?  Sure, why not?</li>
                                <li><OrangeCheck/>Customize the notification settings
                                 for each individual band</li>
                                <li><OrangeCheck/>Watch multiple cities  and customize how far you're willing to travel</li>
                                <li><OrangeCheck/>Sync with music streaming to infer your favorite bands:  if you want</li>
                                <li><OrangeCheck/>Choose immediate notifications, a weekly digest, or both</li>
                                <li><OrangeCheck/>Auto sync to your calendar</li>
                                </ul>
                        </div>)}
                    rightContent={(<img src={FeatureImageBW.src} alt="ui preview" width="420" height="420"></img>)}
                />
                <AltColumn
                    rightOnTop={true}
                    rightContent={(
                        <div className="text-left mt-16 space-y-4">
                            <p className={cssCommon.textH2}>For the price of:</p>
                            <p className={cssCommon.textBase}>$4.00 per month, and the first month FREE.</p>
                            <p className={cssCommon.textBase}>We're all about respecting your mindspace.  None of that $3.99 nonsense.  Because it's YOUR service there are no ads, no upsells, and we never sell your data.</p>
                        </div>)}
                    leftContent={(<img src={FeatureImageCoffee.src} alt="coffee cup" width="420" height="420"></img>)}
                />
            </section>

            <AnalyticObserver name='rock-visit-faq' />
            <section>
                <div className={bgNeutral}>
                    <CenterMaxWidth minXPad={8}>
                        <div className='py-8'>
                            <FaqRock cssCommon={cssCommon}></FaqRock>
                        </div>
                        
                    </CenterMaxWidth>
                    <div className='py-4'> </div>
                </div>
            </section>

            <div className='py-8'></div>

            <FloatingFooter showBelowPageYOffset={400} cssOverride={bgDark}>
                <div className="w-full p-4 flex justify-center">
                    <div className="max-w-xs">
                        <EmailFormRock onSubmitEmail={handleSubmitEmail} cssCommon={cssCommon}></EmailFormRock>
                    </div>
                </div>
            </FloatingFooter>
            {/* <Cta /> */}
        </>
    )
}


function OrangeCheck(){
    return null;
    return (
        <CheckMarkSVG class="inline -ml-9" width={20} height={20} color={'#ef950e'} />
    )
}

function actionButtonWithArrow(props: ButtonProps) {
    return (
        <button type="submit" className="btn-sm inline-flex items-center text-slate-100 bg-orange-500 hover:bg-green-500 group shadow-sm text-xl rounded-sm rounded-r-full" disabled={props.disabled} onClick={props.handle}>
            {props.children}
        </button>
    )
}


function quoteBox() {

    const cssOver = '';
    // const cssOver = 'outline-orange-500';

    return (
        <QuoteBox cssOverrides={cssOver} >
            <Layout2ColMinLeft
                leftContent={(
                    <CircleImage
                        src={ImgScott.src}
                        alt="creator's photo"
                        // cssBorderOverride={'border-orange-500 border-4'}
                        cssBorderOverride={'border-gray-800 border-4'}
                        radius={150}
                    />
                )}
                rightContent={(
                    <div className='flex items-center h-full'>
                        <div className={cssCommon.textBase}>
                            <p>One of my favorite bands, <a className={cssCommon.textLink} href="https://www.youtube.com/watch?v=7iKjSCTxke8" target="_blank">Bloodywood</a>, came all the way from India to play a show while i was visiting Seattle and i MISSED it 'cause i didn't know.</p>
                            <p>Other sites were supposed to be keeping me in the loop, but let me down.  So i built this myself.  Hopefully it can help you too</p>
                        </div>
                    </div>
                )}
            />
        </QuoteBox>
    )
}