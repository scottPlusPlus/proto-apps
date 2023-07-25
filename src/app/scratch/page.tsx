import Ico from '@/public/images/bird/bird.ico';
import OgImage from '@/public/images/bird/bird_song_soc.jpg';

export const metadata = {
    title: 'Scratch',
    description: 'Scotts Proto Apps',
    openGraph: {
        images: [{
            url: OgImage.src,
        }],
    },
    icons: { icon: Ico.src }
}

import { CssBird } from '../bird/cssBird'
import { PageClient } from './pageClient';


const cssBird = CssBird;

export default function Home() {
    return (
        <PageClient cssCommon={cssBird}></PageClient>
    )
}