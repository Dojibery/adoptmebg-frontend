export const signIn = (credentials: any) => {
  // @ts-ignore
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
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
  return (dispatch, getState: unknown, { getFirebase }: unknown) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' });
    });
  };
};
