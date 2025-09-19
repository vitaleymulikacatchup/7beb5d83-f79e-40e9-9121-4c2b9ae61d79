"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[{ name: 'hero', id: 'hero' }, { name: 'about', id: 'about' }, { name: 'how-to-buy', id: 'how-to-buy' }, { name: 'tokenomics', id: 'tokenomics' }, { name: 'footer', id: 'footer' }]}
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={50}
          buttonText="Get started"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <VoidHero
          title="Welcome to Xeven Solutions"
          description="Experience our cutting-edge solutions and onboarding flow."
          tagLabel="Launch"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="At Xeven Solutions, we provide state-of-the-art SaaS offerings for tech-forward users, delivering unmatched value and innovation."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Our Metrics"
          description="Explore our key SaaS metrics including user engagement and growth statistics."
          tokenData={[
            { value: '5K+', description: 'Active Users' },
            { value: '$1M', description: 'ARR' },
            { value: '5%', description: 'Churn Rate' }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Solutions Logo"
          logoText="Xeven Solutions"
          columns={[
            { items: [{ label: 'Home', onClick: () => {} }, { label: 'About Us', onClick: () => {} }] },
            { items: [{ label: 'Services', onClick: () => {} }, { label: 'Contact', onClick: () => {} }] },
            { items: [{ label: 'Privacy Policy', onClick: () => {} }, { label: 'Terms of Service', onClick: () => {} }] },
          ]}
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}
