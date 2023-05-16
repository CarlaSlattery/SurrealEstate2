import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      //check for user
      const docRef = doc(db, "users", user.uid);
      const docSnapshot = await getDoc(docRef);
      //if user doesn't exist, create user
      if (!docSnapshot.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Could not authorise with Google");
    }
  };

  return (
    <div className="socialLogin">
      <p>
        Sign {location.pathname === "/register" ? "up" : "in"} with
        <button className="socialIconDiv" onClick={onGoogleClick}>
          <FcGoogle className="socialIconImg" alt="googleIcon" />
        </button>
      </p>
    </div>
  );
}

export default OAuth;
