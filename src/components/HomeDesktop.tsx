import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import DefaultLayer from '../layouts/default-layer.tsx';
import { firestoreConnect } from 'react-redux-firebase';
import { signIn } from '../store/actions/authActions.ts';
import { useAppDispatch } from '../hooks/redux-hooks.ts';
import { connect } from 'react-redux';
import { compose } from 'redux';

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

interface Props {
    animals?: any;
    firebase?: any;
}

const HomeDesktop: React.FC<Props> = ({ animals, firebase }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('animals', animals);
    console.log('firebase', firebase);

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

export default compose(
  firestoreConnect(['animals']),
  // @ts-ignore
  connect((state: any, props) => ({
    animals: state.firestore.ordered
  }))
)(HomeDesktop);
