import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { login, selectUser } from "./app/features/userSlice";
import { useEffect } from "react";
import { auth } from "./firebase/firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
      }
    });
  }, []);

  return <>{user ? <Homepage /> : <Login />}</>;
}

export default App;
