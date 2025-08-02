'use client';

import { useRouter } from 'next/navigation';
import SurprisesPage from '@/components/SurprisesPage';

export default function Page() {
  const router = useRouter();

  return <SurprisesPage onBack={() => router.push('/Romantic')} />;
}
