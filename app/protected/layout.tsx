// app/protected/layout.tsx
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default function ProtectedLayout({ children }) {
  const token = cookies().get('token');

  if (!token) {
    redirect('/');
  }

  return <>{children}</>;
}
