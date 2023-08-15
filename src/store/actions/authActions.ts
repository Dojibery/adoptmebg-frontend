import { RootState } from '../reducers/rootReducer.ts';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

interface Credentials {
  email: string;
  password: string;
}

export const signIn = (credentials: Credentials) => {
  // @ts-ignore
  return (dispatch: Dispatch<any>, getState: () => RootState) => {
    const auth = getAuth();
    signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err: any) => {
      dispatch({ type: 'LOGIN_ERROR',
        err });
    });

  };
};

export const logOut = () => {
  // @ts-ignore
  return (dispatch: Dispatch<any>, getState: () => RootState) => {
    const auth = getAuth();

    signOut(auth).then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' });
    });
  };
};
