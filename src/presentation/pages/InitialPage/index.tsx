import LangContext from '../../../context/Lang';

import Navbar from '../../Components/Navbar';
import HeroSection from '../../Components/HeroSection';
import BottomInitialPageContent from '../../Components/BottomInitialPageContent';
import Footer from '../../Components/Footer';
import MobileMenu from '../../Components/MobileMenu';

export default function InitialPage() {
  return (
    <LangContext>
      <>
        <Navbar />
        <MobileMenu />
        <HeroSection />
        <BottomInitialPageContent />
        <Footer />
      </>
    </LangContext>
  );
}
