'use client';

import { useRouter } from 'next/navigation';
import FirstTripPage from '@/components/FirstTripPage';

export default function Page() {
  const router = useRouter();

  return <FirstTripPage onBack={() => router.push('/Romantic')} />;
}
