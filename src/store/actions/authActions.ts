import { RootState } from '../reducers/rootReducer.ts';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

interface Credentials {
  email: string;
  password: string;
}

export const signIn = (credentials: Credentials) => {
  // @ts-ignore
  return (dispatch: Dispatch<any>, getState: () => RootState, { getFirebase }) => {
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

export const signOut = () => {
  // @ts-ignore
  return (dispatch: Dispatch<any>, getState: () => RootState, { getFirebase }: unknown) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' });
    });
  };
};
