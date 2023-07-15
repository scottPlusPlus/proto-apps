import RockIco from '@/public/images/rock/rock_icon.ico';
import RockPageClient from "./rockPageClient"
import OgImage from '@/public/images/rock/rock_alert_soc.jpg';

export const metadata = {
    title: 'Rock Alert',
    description: 'Simple Concert Notifications',
    openGraph: {
        images: [{
            url: OgImage.src,
        }],
    },
    icons: { icon: RockIco.src }
}

export default function Home() {
    return (
        <RockPageClient />
    )
}