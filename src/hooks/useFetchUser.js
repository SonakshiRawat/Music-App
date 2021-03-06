import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

import { setUser } from "../reducers/authSlice";
import { auth } from "../firebase";

export default function useFetchUser() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(setUser(userAuth.uid));
      } else {
        dispatch(setUser(null));
      }
    });
    return unsub;
  }, [dispatch]);
}
