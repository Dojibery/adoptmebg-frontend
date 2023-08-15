import {useEffect, useState} from "react";
import {Button, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import { styled } from '@mui/material/styles';
import {WEBSITE_TITLE} from "../constants";

export const Navbar = styled('div')<{hideMobileNavBar: boolean}>(
    ({ theme, hideMobileNavBar }) => `
  display: flex;
  position: fixed;
  top: 0;
  place-content: space-around;
  place-items: center;
  height: 53px;
  width: 100%;
  font-size: calc((0.1em + 1vmin) + (0.1em + 1vmax));
  background: ${theme.palette.common.black};
  box-sizing: border-box;
  border-top: solid 1px #070d0d;
  z-index: 999;
  ${theme.breakpoints.down('md')} {
    bottom: 0;
    top: auto;
  }
  
  visibility: ${hideMobileNavBar ? 'hidden' : 'visible'};
  animation: ${hideMobileNavBar ? 'fadeOut' : 'fadeIn'} 1s linear;
  transition: visibility 1s linear;
`,
);

export const NavbarContentWrapper = styled('div')(
    ({ theme }) => `
  display: flex;
  height: 100%;
  width: 70%;
  max-width: 2560px;
  place-items: center;
  justify-content: space-between;
  ${theme.breakpoints.down('md')} {
    place-content: space-around;
    width: 100%;
  }
`,
);

export const NavbarLeft = styled('div')`
  flex: 1;
`;

export const NavbarCenter = styled(Stack)`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const NavbarRight = styled(Stack)`

`;

const NavbarComponent = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // set initial values
    const [scrollDirection, setScrollDirection] = useState('');

    const navBarElements = [
        {
            name: 'Осинови',
            url: '/',
        },
        {
            name: 'Дарения',
            url: '/donation'
        },
        {
            name: 'Блог',
            url: 'blog',
        },
        {
            name: 'Контакти',
            url: 'contact-us'
        }
    ]

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const { scrollY } = window;
            const direction = scrollY > lastScrollY ? 'down' : 'up';
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener('scroll', updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener('scroll', updateScrollDirection); // clean up
        };
    }, [scrollDirection]);

    return (
        <Navbar hideMobileNavBar={scrollDirection === 'down' && isMobile}>
            <NavbarContentWrapper>
                {!isMobile && (
                    <>
                        <NavbarLeft>
                            <Typography
                                color={theme.palette.white}
                                fontFamily='Roboto'
                                style={{
                                    cursor: 'pointer',
                                    maxWidth: '180px',
                                }}
                            >{ WEBSITE_TITLE }
                            </Typography>
                        </NavbarLeft>

                        <NavbarCenter>
                            { navBarElements.map((el) => (
                                <>
                                    <span><a href={el.url}>{ el.name }</a></span>
                                </>
                            ))}
                        </NavbarCenter>

                        <NavbarRight>
                            <Button sx={{
                                cursor: 'pointer'
                            }}>Вписване</Button>
                        </NavbarRight>
                    </>
                )}
            </NavbarContentWrapper>
        </Navbar>
    );
};

export default NavbarComponent;
