import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "./FirebaseConFig/FirebaseconFig";

const Form = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

    const HandleSignup = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("User Created Successfully")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }

    return (
        <div className="flex flex-col justify-center items-center gap-4 h-100">
            <input type="email" name="" id="" className="border"  onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" name="" id="" className="border" onChange={(e)=> setPassword(e.target.value)}/>
            <button className="border px-3 py-3" onClick={HandleSignup}>Submit</button>
        </div>
    )
}

export default Form