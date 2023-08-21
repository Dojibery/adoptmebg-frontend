import { styled } from '@mui/material/styles';
import { Link, Typography } from '@mui/material';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFillEnvelopeAtFill } from 'react-icons/bs';
import  logo  from '../assets/images/play-store-logo.png';


export const Footer = styled('div')`
  width: 100%;
  display: block;
  position: fixed;
  bottom: 0;
  height: auto;
  width: 100%;
  background: #000;
`;

export const FooterSection = styled('div')`
    padding: 0rem 4rem ;
`;

export const FooterLinks = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  text-align: left;
  margin-bottom: 2rem;
  font-size: 14px;
  font-weight: 500;
  h4 {
    color: #E4A43F;
  }
  p {
    margin: 5px;
  }
`;

export const FooterLinksDiv = styled('div')`
  width: 25%;
  margin: 1rem 0 1rem 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: black;
  text-align: center;
`;

export const FooterSocialMediaDiv = styled('div')`
display: flex;
  justify-content: center;
`;

export const GooglePlayLogo = styled('div')`
  img {
    width: 50%;
    margin-top: 10px;
  }
`;

export const FooterBelow = styled('div')`
  display: block;
  margin-top: 0.2rem;
  p {
    margin: 0;
  }
`;
export const FooterCopyright = styled('div')`
 font-size: 13px;
  line-height: 15px;
  color: #1a1a1a;
  font-weight: 600;
  margin-bottom: 20px;
`;
export const FooterPrivacy = styled('div')`
 font-size: 13px;
  line-height: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`;


const FooterComponent = ()=>{

  return(
    <Footer>
      <FooterSection>
        <FooterLinks>
          <FooterLinksDiv>
            <Typography variant={'h4'}>Често задавани въпроси</Typography>
            <Link href={'#'}>
              <Typography style={{ color:'white' }}>Защо не разбрах по-рано</Typography>
            </Link>
          </FooterLinksDiv>
          <FooterLinksDiv>
            <Typography variant={'h4'}>Меню</Typography>
            <Link href={'#'}>
              <Typography style={{ color:'white' }}>Осинови</Typography>
            </Link>
            <Link href={'#'}>
              <Typography style={{ color:'white' }}>За нас</Typography>
            </Link>
            <Link href={'#'}>
              <Typography style={{ color:'white' }}>Блог</Typography>
            </Link>
            <Link href={'#'}>
              <Typography style={{ color:'white' }}>Дарения</Typography>
            </Link>
            <Link href={'#'}>
              <Typography style={{ color:'white' }}>Контакти</Typography>
            </Link>
          </FooterLinksDiv>
          <FooterLinksDiv>
            <Typography variant={'h4'}>Контакти</Typography>
            <Link href={'#'} >
              <Typography style={{ color:'white' }}><BsFillEnvelopeAtFill style={{ color:'white' }}/> info@adoptmebg.com</Typography>
            </Link>
            <FooterSocialMediaDiv>
              <Link href={'#'}>
                <BiLogoFacebookCircle style = {{ color: 'white',
                  fontSize: '30px',
                  padding: '10px 10px 10px 0' }}/>
              </Link>
              <Link href={'#'}>
                <AiFillInstagram style = {{ color: 'white',
                  fontSize: '30px',
                  padding: '10px' }}/>
              </Link>
            </FooterSocialMediaDiv>
          </FooterLinksDiv>
          <FooterLinksDiv>
            <Typography variant={'h4'}>Мобилно приложение</Typography>
            <Link href={'#'}>
              <GooglePlayLogo>
                <img alt={'Download mobile app'} src={logo} loading={'lazy'}></img>
              </GooglePlayLogo>
            </Link>
          </FooterLinksDiv>
        </FooterLinks>
      </FooterSection>

      <FooterBelow>
        <FooterPrivacy>
          <Link href={'#'}><Typography style={{ color:'white' }}>Privacy policy</Typography></Link>
        </FooterPrivacy>
        <FooterCopyright>
          <Typography style={{ color:'white' }}>Copyright @{new Date().getFullYear()} Осиновяване на животни - Осинови ме </Typography>
          <Typography style={{ color:'white' }}>Powered by Осиновяване на животни - Осинови ме</Typography>
        </FooterCopyright>
      </FooterBelow>
    </Footer>
  );
};

export default FooterComponent;