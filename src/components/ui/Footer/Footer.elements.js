import styled from 'styled-components'
import { FaPaw } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.div`
  background-color: #022217;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`

export const FooterMap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 25px;
  color: #fff;
  @media screen and (max-width: 820px) {
    display: none;
  }
`

export const FooterLinksContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: #795548;
    transition: 0.3s ease-out;
  }
`
export const Text = styled.text`
  color: #fff;
  display: flex;
  text-decoration: none;
  text-align: center;
  font-size: 12px;
  margin-bottom: 0.5rem;
  &:hover {
    color: #795548;
    transition: 0.3s ease-out;
  }
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  padding-bottom: 50px;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

export const SocialIcon = styled(FaPaw)`
  margin-right: 10px;
`

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`
