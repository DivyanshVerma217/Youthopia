import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkContainer,
  FooterLinkTitle,
  FooterLink,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./footerele.js";
// import { animateScroll as scroll } from "react-scroll";

const Footer = () => {

  return (
    <FooterContainer className="">
      <FooterWrap>
        <FooterLinkContainer className="">
          <FooterLinkWrapper className="fullvw">
            <FooterLinkItems className="">
              {/* <FooterLinkTitle>About us</FooterLinkTitle> */}
              <FooterLink to="/" className="black bg-green">
                Mussoorie - Diversion Road, Village Makkawala, Dehradun,
                Uttarakhand -248009,India
              </FooterLink>
              <FooterLink to="/">1800121041000</FooterLink>
              <FooterLink to="/" className="white mr-8">
                admissions@dituniversity.edu.in
              </FooterLink>
              <FooterLink to="/">Open In Google Maps</FooterLink>
            </FooterLinkItems>
            </FooterLinkWrapper>
            <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About</FooterLinkTitle>
              <FooterLink to="/">About Us</FooterLink>
              <FooterLink to="/">Gallery</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Others</FooterLinkTitle>
              <FooterLink to="/">Contact Us</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={{}}>
              DIT University
            </SocialLogo>
            <WebsiteRights>
              DIT University © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
          </SocialMediaWrap>
          <hr className="text-white "/>
          <WebsiteRights className=" flex justify-center ">
              Website designed by: Divyansh Verma, Himanshu Rawat, Harsh Kumar, Shashank Bist
            </WebsiteRights>
        </SocialMedia>
        <div>
          
        </div>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;