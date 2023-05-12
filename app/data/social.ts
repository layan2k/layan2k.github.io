import Facebook from '../assets/Facebook.svg'
import Twitter from '../assets/Twitter.svg'
import LinkedIn from '../assets/Linkedin.svg'
import Instagram from '../assets/instagram.svg'

interface SocialItems {
  name: string,
  link: string,
  logo: any
}
export const SocialMediaIconsData: SocialItems[] = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/webmdsolutions',
    logo: Facebook,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/layan2k/',
    logo: Instagram,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/layan_2k',
    logo: Twitter,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/leslieshumba/',
    logo: LinkedIn,
  },
]
