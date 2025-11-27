import Image from 'next/image';
import CHeader from './components/common/CHeader';
import CFooter from './components/common/CFooter';
import HeroBanner from './components/HeroBanner';
import WhatIsGotchu from './components/WhatIsGotchu';
import KeyFeatures from './components/KeyFeatures';
import ContactUs from './components/ContactUs';
import Centralize from './components/Centralize';
import RoleBased from './components/RoleBased';
import TrustedBy from './components/TrustedBy';

export default function Home() {
  return (
    <div className='flex flex-col justify-between'>
      <CHeader />
      <HeroBanner />
      <WhatIsGotchu />
      <KeyFeatures />
      <Centralize />
      <RoleBased />
      <TrustedBy/>
      <KeyFeatures />
      <ContactUs />
      <CFooter />
    </div>
  );
}
