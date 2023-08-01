import {styled} from "@mui/material/styles";
import {useEffect} from "react";
import DefaultLayer from "../layouts/default-layer.tsx";

export const HomeWrapper = styled('div')(
    ({ theme }) => `
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${theme.palette.common.white};
  
   ${theme.breakpoints.up('sm')} {
      place-items: center;
  }

  ${theme.breakpoints.down('md')} {
    height: 100%;
  }
`,
);

const HomeDesktop = () => {
    useEffect(() => {
        console.log('here');
    }, []);

    return (
       <DefaultLayer>
           <div>Hello</div>
       </DefaultLayer>
    );
}

export default HomeDesktop;
