'use client';

import { useRouter } from 'next/navigation';
import SpecialMomentsPage from '@/components/SpecialMomentsPage';

export default function Page() {
  const router = useRouter();

  return <SpecialMomentsPage onBack={() => router.push('/Romantic')} />;
}
