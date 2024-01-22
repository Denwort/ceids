// components/RedirectIfAuthenticated.js

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from './firebase';

const RedirectIfAuthenticated = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const user = await new Promise((resolve) => {
        const unsubscribe = auth.onAuthStateChanged( (user) => {
          resolve(user);
          unsubscribe();
        });
      });

      if (user) {
        // Si el usuario está autenticado, redirige a la pantalla principal
        router.replace('/profile');
      }
    };

    checkAuth();
  }, [router]);

  return <>{children}</>;
};

export default RedirectIfAuthenticated;

