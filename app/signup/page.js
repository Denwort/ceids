"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../components/firebase';
import RedirectIfAuthenticated from '../components/redirect_if_authenticated';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);


  const onSubmit = (e) => {
    e.preventDefault();
    setError(null)
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    if(passwordOne === passwordTwo)
      createUserWithEmailAndPassword(auth, email, passwordOne)
      .then(authUser => {
        console.log("Success. The user is created in Firebase")
        router.push("/profile");
      })
      .catch(error => {
        // An error occurred. Set error message to be displayed to user
        setError(error.message)
      });
    else
      setError("Password do not match")
  };

  return (
    <RedirectIfAuthenticated>
      <div className="container mx-auto mt-8">
        <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
          <form className="space-y-4" onSubmit={(e) => onSubmit(e)}>
            {error && <div className="text-red-500">{error}</div>}
    
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="signUpEmail" className="text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="signUpEmail"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Email"
              />
            </div>
    
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="signUpPassword" className="text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                name="passwordOne"
                value={passwordOne}
                onChange={(e) => setPasswordOne(e.target.value)}
                id="signUpPassword"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Password"
              />
            </div>
    
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="signUpPassword2" className="text-sm font-semibold">
                Confirm Password
              </label>
              <input
                type="password"
                name="password"
                value={passwordTwo}
                onChange={(e) => setPasswordTwo(e.target.value)}
                id="signUpPassword2"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Confirm Password"
              />
            </div>
    
            <div className="flex items-center justify-center">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </RedirectIfAuthenticated>
  );
  
}

export default SignUp;