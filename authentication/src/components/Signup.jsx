import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import Logo from "./Logo";
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

function Signup() {
  // const [error, setError] = useState("");
  // const { register, handleSubmit } = useForm();
  // const { fullName, setFullName } = useState("");
  // const { email, setEmail } = useState("");
  // const { password, setPassword } = useState("");

  // const auth = getAuth();
  //   const signup = async (e) => {
  //       e.preventDefault();
  //       try {
  //         await createUserWithEmailAndPassword(auth, email, password);
  //         const user = auth.currentUser;
  //         console.log(user);
  //         if (user) {
  //           await setDoc(doc(db, "Users", user.uid), {
  //             email: user.email,
  //             firstName: fname,
  //           });
  //         }
  //         console.log("User Registered Successfully!!");
          
  //       } catch (error) {
  //         console.log(error.message);
        
  //       }
  // };
  
    

  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block text-center w-full ">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onClick={signup}>
          <div className="space-y-5">
            <Input label="Full Name: " placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}

            />
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
