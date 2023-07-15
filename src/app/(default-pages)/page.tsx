import OgImage from '@/public/images/rock/rock_alert_soc.jpg';
import { CenterMaxWidth } from '@/src/agnostic/components/CenterMaxWidth';

export const metadata = {
  title: 'LP.IP',
  description: 'Landing Pages in Progress',
  openGraph: {
    images: [{
      url: OgImage.src,
    }], 
  }
}


export default function Home() {
  return (
    <>
    <CenterMaxWidth minXPad={8}>
      Nope
    </CenterMaxWidth>
    </>
  )
}
