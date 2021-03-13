import { FaFacebook, FaInstagram, FaYelp, FaPhone } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import {
  FooterContainer,
  Text,
  FooterMap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './Footer.elements'

function Footer() {
  return (
    <FooterContainer>
      <FooterMap>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31418.394570370874!2d-116.05058658642449!3d34.13477847130304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgrooming%20near%20me!5e0!3m2!1sen!2sus!4v1615667543618!5m2!1sen!2sus'
          width='400'
          height='200'
          title='google-map'
          style={{
            border: 0,
            borderRadius: 10,
            outline: 'solid 5px black',
            boxShadow: ' 0 0 5pt 3pt black',
          }}
          allowfullscreen=''
          loading='lazy'
          tabIndex='0'
        ></iframe>
      </FooterMap>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/mission-statement'>Mission Statement</FooterLink>
            <FooterLink to='/gallery'>Gallery</FooterLink>
            <FooterLink to='/our-team'>Our Team</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Grooming</FooterLinkTitle>
            <FooterLink to='/'>Forms & Policies</FooterLink>
            <FooterLink to='/'>Services & Price List</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/'>
              {' '}
              <FaPhone /> (555)555-5555{' '}
            </FooterLink>
            <FooterLink to='/'>
              {' '}
              <FiMail /> Click Here
            </FooterLink>
            <FooterLink to='/'>Address :</FooterLink>
            <FooterLink to='/'>
              <Text>123 Dog St Twentynine Palms CA, 92277</Text>
            </FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='/'>Facebook</FooterLink>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Yelp</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            29 PAWS
          </SocialLogo>
          <WebsiteRights>29 Paws Grooming © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Yelp'>
              <FaYelp />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
