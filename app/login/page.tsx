"use client"
import { useEffect, useState } from "react";
import { auth } from "../components/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import RedirectIfAuthenticated from '../components/redirect_if_authenticated';


const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");

    const loginWithUsernameAndPassword = async (e: any) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/profile");
        } catch {
            setNotice("You entered a wrong username or password.");
        }
    }

    


    return (
      <RedirectIfAuthenticated>
        <div className="flex items-center justify-center">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
            {notice !== "" && (
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
                {notice}
              </div>
            )}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={(e) => loginWithUsernameAndPassword(e)}
              >
                Submit
              </button>
            </div>
            <div className="mt-4 text-center">
              <span className="text-sm">
                Need to sign up for an account?{' '}
                <Link href={'/signup'}>
                  <p className="text-blue-500 hover:underline">Click here.</p>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </RedirectIfAuthenticated>
    );
}

export default Login