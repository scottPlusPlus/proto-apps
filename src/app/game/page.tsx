import Ico from '@/public/images/bird/bird.ico';
import OgImage from '@/public/images/bird/bird_song_soc.jpg';

export const metadata = {
    title: 'GlitchBack',
    description: 'Scotts Proto Apps',
    openGraph: {
        images: [{
            url: OgImage.src,
        }],
    },
    icons: { icon: Ico.src }
}

import { PageGameClient } from './pageGameClient';

export default function Home() {
    return (
        <PageGameClient beta={false}></PageGameClient>
    )
}