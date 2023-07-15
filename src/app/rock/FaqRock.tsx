import { CssPropsCommon } from "@/src/frontCode/cssCommon"

type Props = {
    cssCommon: CssPropsCommon
}

export default function FaqRock(props: Props) {

    return (
        <>
            {/* Section header */}
            <div className="pb-12">
                <h2 className="h2">FAQs</h2>
            </div>

            {/* Columns */}
            <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
                {/* Column */}
                <div className="w-full md:w-1/2 space-y-8">
                    {/* Item */}
                    <FaqCard title="What am I signing up for?">
                        <>
                            What am I signing up for?
                            Right now you're only signing up for the wait-list.  We will ONLY use your email to let you know once Rock Alert is ready.  At that time you can choose to sign up or not, up to you.  We expect to start letting people in before the end of 2024.
                        </>
                    </FaqCard>

                </div>

                {/* Column */}
                <div className="w-full md:w-1/2 space-y-8">
                    {/* Item */}
                    <FaqCard title="How Will You Notify Me About Concerts?">
                        <>
                            You don't need another app clogging up your phone.  We'll send you emails,  add the events to a calendar of your choosing,  or you can just visit a customized url to see your current notifications.  No need to sign in again unless you're looking to change your settings.
                        </>
                    </FaqCard>

                    {/* Item */}
                    <FaqCard title="I have more questions!">
                        <>
                            Please <a className={props.cssCommon.textLink} href="https://twitter.com/ScottPlusPlus" target="_blank">get in touch</a>, we'd love to discuss.
                        </>
                    </FaqCard>

                    {/* Item */}
                    {/* <FaqCard title="What is This?">
                  <>
                    BirdSong is a third-party tool helping you be more effective and efficient connecting with people on Twitter.
                    Connect your Twitter Lists, and our AI will find the tweets most worth your response.
                    You can configure to send you a daily email with the most important tweets, or just visit our page to see your currently highlighted Tweets.
                  </>
                </FaqCard> */}

                </div>
            </div>
        </>
    )
}

function FaqCard(props: { title: string, children: React.ReactNode }) {
    return (
        <div className="space-y-2">
            <h4 className="text-xl font-bold">{props.title}</h4>
            <p className="text-slate-500">{props.children}</p>
        </div>
    )
}