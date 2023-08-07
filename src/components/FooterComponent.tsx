import { styled } from '@mui/material/styles';


export const Footer = styled('div')`
    background-color: white;
`;

export const FooterSection = styled('div')`
    padding: 4rem 4rem ;
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
`;

export const FooterLinksDiv = styled('div')`
    width: 150px;
    margin: 1rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: black;
`;
export const FooterBelow = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 0.2rem;
`;
export const FooterCopyright = styled('div')`
 font-size: 13px;
  line-height: 15px;
  color: #1a1a1a;
  font-weight: 600;
`;
export const FooterPrivacy = styled('div')`
 font-size: 13px;
  line-height: 15px;
  color: #1a1a1a;
  margin-left: 2rem;
  font-weight: 600;
`;


const FooterComponent = ()=>{

  return(
    <Footer>
      <FooterSection>
        <FooterLinks>
          <FooterLinksDiv>
            <h4>Често задавани въпроси</h4>
            <a href=''>
              <p>Защо не разбрах по-рано</p>
            </a>
          </FooterLinksDiv>
          <FooterLinksDiv>
            <h4>Меню</h4>
            <a href=''>
              <p>Осинови</p>
            </a>
            <a href=''>
              <p>За нас</p>
            </a>
            <a href=''>
              <p>Блог</p>
            </a>
            <a href=''>
              <p>Дарения</p>
            </a>
            <a href=''>
              <p>Контакти</p>
            </a>
          </FooterLinksDiv>
          <FooterLinksDiv>
            <h4>Контакти</h4>
            <a href=''>
              <p>info@adoptmebg.com</p>
            </a>
            <a href=''>
              <p><img src='' alt='facebook'/></p>
            </a>
            <a href=''>
              <p><img src='' alt='instagram'/></p>
            </a>
          </FooterLinksDiv>
          <FooterLinksDiv>
            <h4>Мобилно приложение</h4>
            <a href=''>
              <p>App</p>
            </a>
          </FooterLinksDiv>
        </FooterLinks>
      </FooterSection>

      <hr></hr>

      <FooterBelow>
        <FooterPrivacy>
          <a href=''><p>Privacy policy</p></a>
        </FooterPrivacy>
        <FooterCopyright>
          <p>Copyright @{new Date().getFullYear()} Осиновяване на животни - Осинови ме Powered by Осиновяване на животни - Осинови ме </p>
        </FooterCopyright>
      </FooterBelow>
    </Footer>
  );
};

export default FooterComponent;