import { CssPropsCommon } from "@/src/frontCode/cssCommon"

type Props = {
    cssCommon: CssPropsCommon
}

export default function FaqRock(props: Props) {

    const cssBody = props.cssCommon.textBase;

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
                    <FaqCard title="What makes us different?">
                        <p className={cssBody}>
                            You can get free concert notifications from <a className={props.cssCommon.textLink} href="https://www.spotify.com" target="_blank">Spotify</a>, <a className={props.cssCommon.textLink} href="https://www.bandsintown.com/" target="_blank">bandsintown</a>, probably more, so why use RockAlert?</p>
                        <p className={cssBody}>
                            Those free services are incentivized to promote the big expen<span className="text-green-500">$$</span>ive shows, the ones you probably already know about.</p>
                        <p className={cssBody}>With RockAlert we answer to YOU, not TicketMaster.  We don't want to drive you to other pages on our site, grow into a social media company, or put an app on your phone.  Get the concert notifications you want, and nothing else.
                        </p>
                    </FaqCard>

                    <FaqCard title="What am I signing up for?">
                        <p className={cssBody}>
                            Right now you're only signing up for the wait-list.  We will ONLY use your email to let you know once Rock Alert is ready.  At that time you can choose to sign up or not; your call.</p>
                        <p className={cssBody}>We expect to start letting people in before the end of 2024.
                        </p>
                    </FaqCard>

                </div>

                {/* Column */}
                <div className="w-full md:w-1/2 space-y-8">
                    {/* Item */}
                    <FaqCard title="How Will You Notify Me About Concerts?">
                        <p className={cssBody}>
                            You don't need another app clogging up your phone.  We'll send you emails,  add the events to a calendar of your choosing,  or you can just visit a custom url to see your current notifications.  No need to sign in again unless you're looking to change your settings.
                        </p>
                    </FaqCard>

                    {/* Item */}
                    <FaqCard title="I have more questions!">
                        <p className={cssBody}>
                            Please <a className={props.cssCommon.textLink} href="https://twitter.com/ScottPlusPlus" target="_blank">get in touch</a>, we'd love to discuss.
                        </p>
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
            {props.children}
        </div>
    )
}