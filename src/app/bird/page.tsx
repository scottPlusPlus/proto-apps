import Ico from '@/public/images/bird/bird.ico';
import OgImage from '@/public/images/bird/bird_song_soc.jpg';

export const metadata = {
    title: 'BirdSong',
    description: 'Build community on Twitter',
    openGraph: {
        images: [{
            url: OgImage.src,
        }],
    },
    icons: { icon: Ico.src }
}

import { CssBird } from './cssBird'
import { PageClient } from './pageClient';


const cssBird = CssBird;

export default function Home() {
    return (
        <PageClient cssCommon={cssBird}></PageClient>
    )
}