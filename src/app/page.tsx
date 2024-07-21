import ProtectedRoute from "@/components/auth/ProtectedRoute";
import HomeContentLayout from "@/components/home/HomeContentLayout";


export default function Home() {
  return (
    <ProtectedRoute>
      <HomeContentLayout />
    </ProtectedRoute>
  )
}
