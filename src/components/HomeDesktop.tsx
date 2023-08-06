import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import DefaultLayer from '../layouts/default-layer.tsx';
import { Animal } from '../models/animal.model.ts';
import { useFirestoreConnect } from 'react-redux-firebase';
import { signIn } from '../store/actions/authActions.ts';
import { useAppDispatch } from '../hooks/redux-hooks.ts';
import { RootState } from '../store/reducers/rootReducer.ts';
import { useSelector } from 'react-redux';

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
    test?: boolean;
}

const HomeDesktop: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  // Use this hook if you want to handle data fetching with react-redux-firebase
  useFirestoreConnect([{ collection: 'animals',
    storeAs: 'animals' }]);

  // Use useSelector hook to get the data from the Redux store
  const animals = useSelector((state: RootState) => state.firestore.ordered.animals) as Animal[];

  useEffect(() => {
    console.log('animals', animals);

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
