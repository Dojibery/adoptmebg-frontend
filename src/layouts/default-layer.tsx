
import { NavbarComponent } from '../components';
import { HomeWrapper } from '../components/HomeDesktop.tsx';
import FooterComponent from '../components/FooterComponent.tsx';

type DefaultLayerProps = {
    children: React.ReactNode; // 👈️ type children
};

const DefaultLayer = (props: DefaultLayerProps) => {
  return (
    <>
      <HomeWrapper>
        <NavbarComponent />

        {props.children}
                
        <FooterComponent />
      </HomeWrapper>
    </>
  );
};

export default DefaultLayer;
