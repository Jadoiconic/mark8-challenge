"use client";
import { ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import useAuth from '@/generic/hooks/auth/useAuth';
import Skeleton from '@/generic/components/skeleton/Skeleton';

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { user, loading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const allowedRoutes = ['/auth/login', '/auth/signup'];

    if (loading || (!user && !allowedRoutes.includes(pathname))) {
        return <Skeleton />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
