"use client"
import { useRouter } from "next/navigation";
import { auth } from "../components/firebase";
import { signOut } from "firebase/auth";
import { useState, useEffect } from 'react';
import ProtectedRoute from '../components/protected_route';


const Profile = () => {
    const router = useRouter();
    
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((u) => {
        if (u) {
            setUser(u);
        } else {
            setUser(null);
        }
        });
        return () => unsubscribe(); // Cleanup on component unmount
    }, []);

    const logoutUser = async (e) => {
        e.preventDefault()
        await signOut(auth);
        router.push("/");
    }

    return(
        <ProtectedRoute>
            {user && (
            <div className="container mx-auto mt-8">
            <div className="flex items-center justify-center">
              <div className="bg-white p-8 rounded-md shadow-md w-full md:w-1/3">
                <p className="text-center">
                  Welcome{' '}
                  <em className="text-blue-500 underline">{user.email}</em>. You are logged in!
                </p>
                <div className="mt-4">
                  <button
                    type="button"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                    onClick={(e) => logoutUser(e)}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
            )}
        </ProtectedRoute>       
    )    
}

export default Profile