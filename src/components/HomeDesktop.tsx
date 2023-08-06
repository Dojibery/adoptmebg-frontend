import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import DefaultLayer from '../layouts/default-layer.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { Animal } from '../models/animal.model.ts';
import { useFirestoreConnect } from 'react-redux-firebase';
import { signIn } from '../store/actions/authActions.ts';

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
  const dispatch = useDispatch();
  // Use this hook if you want to handle data fetching with react-redux-firebase
  useFirestoreConnect([{ collection: 'animals' }]);

  // Use useSelector hook to get the data from the Redux store
  const animals = useSelector((state: any) => state.firestore.ordered.animals) as Animal[];

  useEffect(() => {
    console.log('animals', animals);

    // Auth with system account
    //   dispatch(
    //       // @ts-ignore
    //   signIn({
    //     email: 'vlad@abv.bg',
    //     password: 'Qwerty123'
    //   })
    // );
  }, []);

  return (
    <DefaultLayer>
      <div>Hello</div>
    </DefaultLayer>
  );
};

export default HomeDesktop;
