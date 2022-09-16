import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

import { 
    FooterContainer, 
    FooterLinksWrapper, 
    FooterWrap, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLinksContainer, 
    FooterLink,
    SocialMidia,
    SocialIconLinks,
    SocialIcons,
    SocialLogo,
    SocialMidiaWrap,
    WebsiteRights
} from './FooterElements';

function Footer() {

    const toggleHome = () => {
        scroll.scrollToTop()
      }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonious</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonious</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonious</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonious</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMidia>
                <SocialMidiaWrap>
                    <SocialLogo to="/" onClick={toggleHome}>
                        Dolla
                    </SocialLogo>
                    <WebsiteRights>dolla @ {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLinks href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLinks>
                        <SocialIconLinks href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLinks>
                        <SocialIconLinks href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube/>
                        </SocialIconLinks>
                        <SocialIconLinks href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLinks>
                    </SocialIcons>
                </SocialMidiaWrap>
            </SocialMidia>
        </FooterWrap>
    </FooterContainer>
    )
}

export default Footer;