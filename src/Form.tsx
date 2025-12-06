import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, provider } from "./FirebaseConFig/FirebaseconFig";

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useState(null as any);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const Subscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })
        return () => Subscribe()
    }, [])
    const HandleSignup = () => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("User Created Successfully")
                setEmail('')
                setPassword('')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const HandleGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                const user = result.user;
                alert("Login Successfully")
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                alert(errorMessage)
            });
    }

    const Handlelogout = () => {
        auth.signOut()
            .then(() => {
                alert("Logout Successfully")
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }

    return (
        <div className="flex flex-col justify-center items-center gap-4 h-100">
            <input placeholder="Email" type="email" value={email} className="border px-2 py-2 rounded-md" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Pasword" type="password" value={password} className="border px-2 py-2 rounded-md" onChange={(e) => setPassword(e.target.value)} />
            <button className="border px-3 py-2 rounded-2xl cursor-pointer" onClick={HandleSignup}>
                {
                    loading ? "Loading..." : "Signup"
                }
            </button>
            <button className="border px-3 py-2 rounded-2xl cursor-pointer" onClick={HandleGoogle}>Google Login</button>
            {
                currentUser && <h1>{currentUser.email}</h1>
            }
            {
                currentUser && <button className="border px-3 py-2 rounded-2xl cursor-pointer" onClick={Handlelogout}>Logout</button>
            }

        </div>
    )
}

export default Form