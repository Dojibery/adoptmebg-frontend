import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import DefaultLayer from '../layouts/default-layer.tsx';
import { signIn } from '../store/actions/authActions.ts';
import { useAppDispatch } from '../hooks/redux-hooks.ts';

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

const HomeDesktop: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Auth with system account
    dispatch(
      signIn({
        email: 'vlad@abv.bg',
        password: 'qwerty123'
      })
    );
  }, []);

  return (
    <DefaultLayer>
      <div>Hello</div>
    </DefaultLayer>
  );
};

export default HomeDesktop;
