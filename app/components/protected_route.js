import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from './firebase';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( (user) => {
      if (!user) {
        // Si el usuario no está autenticado, redirige a la pantalla de inicio de sesión
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  return <>{children}</>;
};

export default ProtectedRoute;