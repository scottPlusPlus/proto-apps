"use client"

import { useEffect } from "react";
import Image from 'next/image'
import Illustration from '@/public/images/hero-illustration.svg'
import HeroImage from '@/public/images/twitter_hero.png'
import EmailForm from '@/components/emailForm'
import { submitAnalytics, submitEmail } from "@/frontCode/dataUtils";
import { ButtonProps, CssPropsCommon } from "@/src/frontCode/cssCommon";
import { BirdActionButton } from "./BirdActionButton";

type Props = {
  cssCommon:CssPropsCommon,
  goButton:React.ReactElement,
}

export default function HeroBird(props:Props) {

  useEffect(() => {
    const ref = "ref=" + document.referrer;
    submitAnalytics("birdsong-visit-top", ref);
  }, []);


  return (
    <section className="relative">
      {/* Bg */}
      <div
        className="absolute inset-0 mb-28 md:mb-0 bg-gradient-to-tr from-blue-600 to-blue-500 pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-36 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
            {/* Content */}
            <div className="md:w-[600px]">
              {/* Copy */}
              <h1 className="h1 text-white mb-6" data-aos="fade-up" data-aos-delay="100">
                <div className="w-full">Skip the Chatter</div><div className="w-full">Build Real <span className='text-amber-400'>Community</span> on Twitter</div>
              </h1>
              <p className="text-lg text-blue-200 mb-8" data-aos="fade-up" data-aos-delay="200">
                Your AI assisstant highlights the tweets most worth your response to help you have an actual conversation.
              </p>

              {/* Buttons */}
              <div
                className="text-white max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-0"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {props.goButton}
              </div>
            </div>

            {/* Image */}
            <div className="max-w-sm mx-auto md:max-w-none md:absolute md:left-[600px] md:top-0 -mb-12 md:-mt-12 md:mb-0">
              <div className="relative -ml-3 -mr-24 md:mx-0">
                {/* the glow */}
                <Image
                  className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mt-16 md:mt-0 pointer-events-none -z-10 max-w-none mix-blend-lighten"
                  src={Illustration}
                  priority
                  alt="Hero illustration"
                  aria-hidden="true"
                />
                <Image src={HeroImage} className="md:max-w-none" width="548" height="545" alt="Tweets" data-aos="fade-up" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

