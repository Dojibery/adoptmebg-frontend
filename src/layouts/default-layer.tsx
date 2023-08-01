
import {NavbarComponent} from "../components";
import {HomeWrapper} from "../components/HomeDesktop.tsx";

type DefaultLayerProps = {
    children: React.ReactNode; // 👈️ type children
};

const DefaultLayer = (props: DefaultLayerProps) => {
    return (
        <>
            <HomeWrapper>
                <NavbarComponent />

                {props.children}
            </HomeWrapper>
        </>
    );
}

export default DefaultLayer;
