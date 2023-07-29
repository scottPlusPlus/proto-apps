"use client"

import { CenterMaxWidth } from "@/src/agnostic/components/CenterMaxWidth";
import { CssBird } from "../cssBird";
import EmailFormBird from "../emailFormBird";
import { submitAnalytics, submitEmail, urlWithRef } from "@/src/frontCode/dataUtils";
import { ThanksPopup } from "@/src/agnostic/components/ThanksPopup";
import { Signal } from "@/src/agnostic/utils/Signal";
import { useEffect } from "react";

const cssBird = CssBird;

export default function BirdThanksPage() {

    const thanksPopupSignal = new Signal();
    
    var anaData = "";
    useEffect(() => {
        anaData = urlWithRef(document);
        submitAnalytics("rock-visit-thanks", anaData, "bird",  );
    }, []);

    
    function handleSubmitEmail(email: string): void {
        //console.log("pageClient:  handle submitEmail");
        submitEmail(email, anaData, "bird");
        thanksPopupSignal.trigger();
    }

    return (

        <div className={"py-8 " + cssBird.bgDark}>
            <ThanksPopup popupColor="bg-yellow-500" openSignal={thanksPopupSignal}></ThanksPopup>
            <CenterMaxWidth minXPad={8}>
                <div className="flex w-full justify-center text-center">
                    <div>
                        <div className={cssBird.textLight}>
                            <h1 className={cssBird.textH1}>Thank You!</h1>
                            <p className={cssBird.textBaseBig}>Birdsong is coming soon.  Join the waitlist to gain access to the beta once it's available, and receive a special discount on Birdsong once it goes live.</p>
                        </div>
                        <div className="flex w-full justify-center py-8">
                            <EmailFormBird cssCommon={cssBird} onSubmitEmail={handleSubmitEmail}></EmailFormBird>
                        </div>
                        <div className="text-white">
                            <p className={cssBird.textBaseBig}>In the meantime, if you have any other questions or concerns, just <a className={cssBird.textLink} href="https://twitter.com/ScottPlusPlus" target="_blank">get in touch.</a></p>
                        </div>
                    </div>
                </div>
            </CenterMaxWidth>
        </div>

    )
}